---
title: Displaying Reservations
---
# FrontDesk - Displaying Reservations (Repeater with nested ListView)

In this sample, we use the LINQ query Querying Reservations from our LinqPad explorations to display the day's reservations in FrontDesk.aspx.

- Create the DTO Classes: `ReservationSummary` and `ReservationCollection` DTO Classes

```csharp
public class ReservationSummary
{
    public int ID { get; set; }
    public string Name { get; set; }
    public DateTime Date { get; set; }
    public int NumberInParty { get; set; }
    public string Status { get; set; }
    public string Event { get; set; }
    public string Contact { get; set; }
}
```

:::tip
The LINQ query created in LinqPad simply ended with grouping the raw reservation summary information by the time-of-day for the reservation. While that works nicely in LinqPad, there are two considerations that we must face in adapting that code to our application.

- Our application needs a class to embody the grouping of ReservationSummary object. Hence the need for `ReservationCollection`
- In LinqPad, we are writing LINQ-to-SQL, and in transitioning to LINQ-to-Entities, we find we cannot call the `.TimeOfDay` property of the `ReservationDate` because `.TimeOfDay` cannot be translated diretly to SQL by Entity Framework. If we still want the grouping to be a `TimeSpan`, then we will need to construct that value from other values in our grouping.
:::

Since reservations in our application are always set for the "top" of the hour, then we only need to get the Hour part of the Reservation Date.

```csharp
public class ReservationCollection
{
    public int Hour { get; set; }
    public TimeSpan SeatingTime { get { return new TimeSpan(Hour, 0, 0); } }
    public virtual ICollection<ReservationSummary> Reservations { get; set; }
}
```

- Create the BLL class: `SeatingController` (See the note on the DTO classes above. This has a bearing on the last part of this ReservationsByTime() method.)

```csharp
[DataObject]
public class SeatingController
{
    [DataObjectMethod(DataObjectMethodType.Select)]
    public List<ReservationCollection> ReservationsByTime(DateTime date)
    {
        using (var context = new RestaurantContext())
        {
            var result = (from data in context.Reservations
                            where data.ReservationDate.Year == date.Year
                            && data.ReservationDate.Month == date.Month
                            && data.ReservationDate.Day == date.Day
                            // && data.ReservationDate.Hour == timeSlot.Hours
                            && data.ReservationStatus == Reservation.Booked
                            select new ReservationSummary()
                            {
                                ID = data.ReservationID,
                                Name = data.CustomerName,
                                Date = data.ReservationDate,
                                NumberInParty = data.NumberInParty,
                                Status = data.ReservationStatus,
                                Event = data.Event.Description,
                                Contact = data.ContactPhone
                            }).ToList();
            var finalResult = from item in result
                                orderby item.NumberInParty
                                group item by item.Date.Hour into itemGroup
                                select new ReservationCollection()
                                {
                                    Hour = itemGroup.Key,
                                    Reservations = itemGroup.ToList()
                                };
            return finalResult.OrderBy(x=>x.Hour).ToList();
        }
    }
}

```

- Create the Markup in FrontDesk.aspx Website ASP.Net Markup

```xml
<div class="pull-right col-md-5">
    <details open>
        <summary>Reservations by Date/Time</summary>
        <h4>Today's Reservations</h4>
        <asp:Repeater ID="ReservationsRepeater" runat="server"
            ItemType="eRestaurant.Entities.DTOs.ReservationCollection" DataSourceID="ReservationsDataSource">
            <ItemTemplate>
                <div>
                    <h4><%# Item.Time %></h4>
                    <asp:ListView ID="ReservationSummaryListView" runat="server"
                            ItemType="eRestaurant.Entities.DTOs.ReservationSummary"
                            DataSource="<%# Item.Reservations %>">
                        <LayoutTemplate>
                            <div class="seating">
                                <span runat="server" id="itemPlaceholder" />
                            </div>
                        </LayoutTemplate>
                        <ItemTemplate>
                            <div>
                                <%# Item.Name %> —
                                <%# Item.NumberInParty %> —
                                <%# Item.Status %> —
                                PH:
                                <%# Item.Contact %>
                            </div>
                        </ItemTemplate>
                    </asp:ListView>
                </div>
            </ItemTemplate>
        </asp:Repeater>
        <asp:ObjectDataSource runat="server" ID="ReservationsDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="ReservationsByTime" TypeName="eRestaurant.BLL.SeatingController">
            <SelectParameters>
                <asp:ControlParameter ControlID="SearchDate" PropertyName="Text" Name="date" Type="DateTime"></asp:ControlParameter>
            </SelectParameters>
        </asp:ObjectDataSource>
    </details>
</div>
```
