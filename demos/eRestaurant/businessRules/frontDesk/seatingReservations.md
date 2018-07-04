---
title: Seating Reservations
---
# FrontDesk - Seating Reservations (ListView.OnItemCommand)

Seating Reservations is much like seating walk-in customers, except that the number of people in the reservation might be more than a single table can accommodate. Therefore, when the reservation party arrives, the host/hostess can choose which tables the party will be seated at, along with the waiter that will be the primary waiter serving the group and managing the bill. The business rules managed by the system are more complex than for seating walk-ins: A number of database tables will be affected by the seating of a reservation customer, and these must occur in a **transaction**, succeeding or failing as a group.

1. Tables must be available and the total capacity must accomodate the reservation party.
2. A Bill is generated with an assigned waiter, and the bill is associated with the reservation
3. The tables are associated with the reservation.
4. The status of the reservation is to transition to Arrived.

## The Code…

- Create the BLL code to handle seating reservation customers. BLL code

```csharp
public void SeatCustomer(DateTime when, int reservationId, List<byte> tables, int waiterId)
{
    var availableSeats = AvailableSeatingByDateTime(when.Date, when.TimeOfDay);
    using (var context = new RestaurantContext())
    {
        List<string> errors = new List<string>();
        // Rule checking:
        // - Reservation must be in Booked status
        // - Table must be available - typically a direct check on the table, but proxied based on the mocked time here
        // - Table must be big enough for the # of customers
        var reservation = context.Reservations.Find(reservationId);
        if (reservation == null)
            errors.Add("The specified reservation does not exist");
        else if (reservation.ReservationStatus != Reservation.Booked)
            errors.Add("The reservation's status is not valid for seating. Only booked reservations can be seated.");
        var capacity = 0;
        foreach(var tableNumber in tables)
        {
            if (!availableSeats.Exists(x => x.Table == tableNumber))
                errors.Add("Table " + tableNumber + " is currently not available");
            else
                capacity += availableSeats.Single(x => x.Table == tableNumber).Seating;
        }
        if (capacity < reservation.NumberInParty)
            errors.Add("Insufficient seating capacity for number of customers. Alternate tables must be used.");
        if (errors.Count > 0)
            throw new BusinessRuleException("Unable to seat customer", errors);
        // 1) Create a blank bill with assigned waiter
        Bill seatedCustomer = new Bill()
        {
            BillDate = when,
            NumberInParty = reservation.NumberInParty,
            WaiterID = waiterId,
            ReservationID = reservation.ReservationID
        };
        context.Bills.Add(seatedCustomer);
        // 2) Add the tables for the reservation and change the reservation's status to arrived
        foreach (var tableNumber in tables)
            reservation.Tables.Add(context.Tables.Single(x => x.TableNumber == tableNumber));
        reservation.ReservationStatus = Reservation.Arrived;
        var updatable = context.Entry(context.Reservations.Attach(reservation));
        updatable.Property(x=>x.ReservationStatus).IsModified = true;
        //updatable.Reference(x=>x.Tables).
        // 3) Save changes
        context.SaveChanges();
    }
    //string message = String.Format("Not yet implemented. Need to seat reservation {0} for waiter {1} at tables {2}", reservationId, waiterId, string.Join(", ", tables));
    //throw new NotImplementedException(message);
}
```

- Modify the ListView nested in the repeater to handle the OnItemCommand event. Website code - markup

```xml
<asp:ListView ID="ReservationSummaryListView" runat="server" OnItemCommand="ReservationSummaryListView_OnItemCommand"
    ItemType="eRestaurant.Entities.POCOs.ReservationSummary" DataSource='<%# Item.Reservations %>'>
        <layouttemplate>
        <div class="seating">
        <span runat="server" id="itemPlaceholder" />
            </div>
        </layouttemplate>
        <itemtemplate>
        <div>
                <%# Item.Name %> —
                <%# Item.NumberInParty %> —
                <%# Item.Status %> —
                <%# Item.Contact %> —
        <asp:LinkButton ID="InsertButton" runat="server" CommandName="Seat" CommandArgument='<%# Item.ID %>'>Reservation Seating<span class="glyphicon glyphicon-plus"></span></asp:LinkButton>
            </div>
        </itemtemplate>
    </asp:ListView>
```

- Add a drop-down for the primary waiter and a multi-item select to identify the table(s) that the reservation party will be seated at. (code immediately after the Repeater/ListView for today's reservations)

```xml
<asp:Panel ID="ReservationSeatingPanel" runat="server" Visible='<%# ShowReservationSeating() %>'>
    <asp:DropDownList ID="WaiterDropDownList" runat="server" CssClass="seating"
        AppendDataBoundItems="true" DataSourceID="WaitersDataSource"
        DataTextField="FullName" DataValueField="WaiterId">
        <asp:listitem value="0">[select a waiter]</asp:listitem>
    </asp:DropDownList>
    <asp:ListBox ID="ReservationTableListBox" runat="server" CssClass="seating"
        DataSourceID="AvailableSeatingObjectDataSource" SelectionMode="Multiple" Rows="14"
        DataTextField="Table" DataValueField="Table">
    </asp:ListBox>
</asp:Panel>
```

As an exercise on your own, write the code for ShowReservationSeating() that will return true if the number of reservations for the day is greater than zero, false otherwise.

```xml
    <%--For the Waiter DropDown--%>
<asp:ObjectDataSource runat="server" ID="WaitersDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="ListAllWaiters" TypeName="eRestaurant.BLL.RestaurantAdminController"></asp:ObjectDataSource>
    
    <%--For the Available Tables DropDown (seating reservation)--%>
<asp:ObjectDataSource runat="server" ID="AvailableSeatingObjectDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="AvailableSeatingByDateTime" TypeName="eRestaurant.BLL.SeatingController">
<selectparameters>
<asp:controlparameter ControlID="SearchDate" PropertyName="Text" name="date" type="DateTime"></asp:controlparameter>
<asp:controlparameter ControlID="SearchTime" PropertyName="Text" dbtype="Time" name="time"></asp:controlparameter>
        </selectparameters>
    </asp:ObjectDataSource>
```

- Write the code to handle the OnItemCommand event.

```csharp
protected void ReservationSummaryListView_OnItemCommand(object sender, ListViewCommandEventArgs e)
{
    // Check the command name and add the reservation for the specified seats.
    if (e.CommandName.Equals("Seat"))
    {
        MessageUserControl.TryRun(() =>
        {
            // Get the data
            var reservationId = int.Parse(e.CommandArgument.ToString());
            var selectedItems = new List<byte>();
            foreach (ListItem item in ReservationTableListBox.Items)
            {
                if (item.Selected)
                    selectedItems.Add(byte.Parse(item.Text.Replace("Table ", "")));
            }
            var when = DateTime.Parse(SearchDate.Text).Add(TimeSpan.Parse(SearchTime.Text));
            // Seat the reservation customer
            var controller = new SeatingController();
            controller.SeatCustomer(when, reservationId, selectedItems, int.Parse(WaiterDropDownList.SelectedValue));
            // Refresh the gridview
            SeatingGridView.DataBind();
            ReservationsRepeater.DataBind();
        }, "Customer Seated", "Reservation customer has arrived and has been seated");
    }
}
```

```csharp
    protected bool ShowReservationSeating()
    {
        // TODO: Get the reservations for the day and return true if there are reservations, false otherwise
        return false;
    }
```
