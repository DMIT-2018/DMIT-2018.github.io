---
title: Occupied Tables
---
# FrontDesk - Displaying Occupied Tables (GridView control)

In this sample, we use the LINQ query Quering Occupied Tables from our LinqPad explorations to display the tables and their occupancy for a specific date/time.

- Create the DTO Classes: `SeatingSummary` (technically, this can be better classified as a POCO) DTO/POCO Classes

```csharp
public class SeatingSummary
{
    public byte Table { get; set; }
    public int Seating { get; set; }
    public bool Taken { get; set; }
    public int? BillID { get; set; }
    public decimal? BillTotal { get; set; }
    public string Waiter { get; set; }
    public string ReservationName { get; set; }
}
```

- Create the BLL methods: `SeatingController.SeatingByDateTime()`. BLL Code
  - For this method, we will be adapting the code we created in LinqPad to get the raw data we need. In the process, there are a couple of items that we need to adapt for use in LINQ to Entities.
    - LINQ to Entities does not support the TimeOfDay property on DateTime objects. In place of that, one option is to use a static method available through the `System.Data.Entity.DbFunctions` class: `.CreateTime()`. (This change is made in the query for step 1)
    - Our navigation properties might not exactly match the names used in LinqPad (LinqPad uses LINQ to SQL and auto-generates navigation properties based on naming patterns that exactly match the table names). As such, we might need to adapt our LinqPad query to match what we have in our application.
    - Our application does not model the ReservationTables database table; instead, our application identifies the mapping between `Reservation` and `Table` in a many-to-many relationship, with the physical mapping to the database tables being specified in the `RestaurantContext.OnModelCreating()`. As such, the `from` portions of the query for Reservations in step 1 needs to use the navigation properties as modelled in our application. OnModelCreating() code

```csharp
protected override void OnModelCreating(DbModelBuilder modelBuilder)
{
    modelBuilder
        .Entity<Reservation>().HasMany(r => r.Tables)
        .WithMany(t => t.Reservations)
        .Map(mapping =>
        {
            mapping.ToTable("ReservationTables");
            mapping.MapLeftKey("ReservationID");
            mapping.MapRightKey("TableID");
        });
    base.OnModelCreating(modelBuilder);
}

```

```csharp
[DataObjectMethod(DataObjectMethodType.Select)]
public List<SeatingSummary> SeatingByDateTime(DateTime date, TimeSpan time)
{
    using (var context = new RestaurantContext())
    {
        // Step 1 - Get the table info along with any walk-in bills and reservation bills for the specific time slot
        var step1 = from data in context.Tables
                    select new
                    {
                        Table = data.TableNumber,
                        Seating = data.Capacity,
                        // This sub-query gets the bills for walk-in customers
                        Bills = from walkIn in data.Bills
                                where
                                        walkIn.BillDate.Year == date.Year
                                    && walkIn.BillDate.Month == date.Month
                                    && walkIn.BillDate.Day == date.Day
                                    // The following won't work in EF to Entities - it will return this exception:
                                    //  "The specified type member 'TimeOfDay' is not supported..."
                                    // && walkIn.BillDate.TimeOfDay <= time
                                    && DbFunctions.CreateTime(walkIn.BillDate.Hour, walkIn.BillDate.Minute, walkIn.BillDate.Second) <= time
                                    && (!walkIn.OrderPaid.HasValue || walkIn.OrderPaid.Value >= time)
                                //                          && (!walkIn.PaidStatus || walkIn.OrderPaid >= time)
                                select walkIn,
                        // This sub-query gets the bills for reservations
                        Reservations = from booking in data.Reservations
                                        from reservationParty in booking.Bills
                                        where
                                                reservationParty.BillDate.Year == date.Year
                                            && reservationParty.BillDate.Month == date.Month
                                            && reservationParty.BillDate.Day == date.Day
                                            // The following won't work in EF to Entities - it will return this exception:
                                            //  "The specified type member 'TimeOfDay' is not supported..."
                                            // && reservationParty.BillDate.TimeOfDay <= time
                                            && DbFunctions.CreateTime(reservationParty.BillDate.Hour, reservationParty.BillDate.Minute, reservationParty.BillDate.Second) <= time
                                            && (!reservationParty.OrderPaid.HasValue || reservationParty.OrderPaid.Value >= time)
                                        //                          && (!reservationParty.PaidStatus || reservationParty.OrderPaid >= time)
                                        select reservationParty
                    };
        // Step 2 - Union the walk-in bills and the reservation bills while extracting the relevant bill info
        // .ToList() helps resolve the "Types in Union or Concat are constructed incompatibly" error
        var step2 = from data in step1.ToList() // .ToList() forces the first result set to be in memory
                    select new
                    {
                        Table = data.Table,
                        Seating = data.Seating,
                        CommonBilling = from info in data.Bills.Union(data.Reservations)
                                        select new // info
                                        {
                                            BillID = info.BillID,
                                            BillTotal = info.Items.Sum(bi => bi.Quantity * bi.SalePrice),
                                            Waiter = info.Waiter.FirstName,
                                            Reservation = info.Reservation
                                        }
                    };
        // Step 3 - Get just the first CommonBilling item
        //         (presumes no overlaps can occur - i.e., two groups at the same table at the same time)
        var step3 = from data in step2.ToList()
                    select new
                    {
                        Table = data.Table,
                        Seating = data.Seating,
                        Taken = data.CommonBilling.Count() > 0,
                        // .FirstOrDefault() is effectively "flattening" my collection of 1 item into a 
                        // single object whose properties I can get in step 4 using the dot (.) operator
                        CommonBilling = data.CommonBilling.FirstOrDefault()
                    };
        // Step 4 - Build our intended seating summary info
        var step4 = from data in step3
                    select new SeatingSummary()
                    {
                        Table = data.Table,
                        Seating = data.Seating,
                        Taken = data.Taken,
                        // use a ternary expression to conditionally get the bill id (if it exists)
                        BillID = data.Taken ?               // if(data.Taken)
                                    data.CommonBilling.BillID  // value to use if true
                                :                            // else
                                    (int?)null,               // value to use if false
                        // Note: going back to step 2 to be more selective of my Billing Information
                        BillTotal = data.Taken ?
                                    data.CommonBilling.BillTotal : (decimal?)null,
                        Waiter = data.Taken ? data.CommonBilling.Waiter : (string)null,
                        ReservationName = data.Taken ?
                                            (data.CommonBilling.Reservation != null ?
                                            data.CommonBilling.Reservation.CustomerName : (string)null)
                                        : (string)null
                    };
        return step4.ToList();
    }
}
```

- Create the Markup in FrontDesk.aspx Website Code

```xml
<div class="col-md-7">
    <details open>
        <summary>Tables</summary>
        <asp:GridView ID="SeatingGridView" runat="server" AutoGenerateColumns="False"
            DataSourceID="SeatingObjectDataSource" ItemType="eRestaurant.Entities.DTOs.SeatingSummary">
            <Columns>
                <asp:BoundField DataField="Table" HeaderText="Table" SortExpression="Table"></asp:BoundField>
                <asp:BoundField DataField="Seating" HeaderText="Seating" SortExpression="Seating"></asp:BoundField>
                <asp:CheckBoxField DataField="Taken" HeaderText="Taken" SortExpression="Taken" ItemStyle-HorizontalAlign="Center"></asp:CheckBoxField>
                <asp:BoundField DataField="BillID" HeaderText="BillID" SortExpression="BillID"></asp:BoundField>
                <asp:BoundField DataField="BillTotal" HeaderText="BillTotal" SortExpression="BillTotal"></asp:BoundField>
                <asp:BoundField DataField="Waiter" HeaderText="Waiter" SortExpression="Waiter"></asp:BoundField>
                <asp:BoundField DataField="ReservationName" HeaderText="ReservationName" SortExpression="ReservationName"></asp:BoundField>
            </Columns>
        </asp:GridView>
    </details>
</div>
<asp:ObjectDataSource runat="server" ID="SeatingObjectDataSource" OldValuesParameterFormatString="original_{0}"
    SelectMethod="SeatingByDateTime" TypeName="eRestaurant.BLL.SeatingController">
    <SelectParameters>
        <asp:ControlParameter ControlID="SearchDate" PropertyName="Text" Name="date" Type="DateTime"></asp:ControlParameter>
        <asp:ControlParameter ControlID="SearchTime" PropertyName="Text" DbType="Time" Name="time"></asp:ControlParameter>
    </SelectParameters>
</asp:ObjectDataSource>
```
