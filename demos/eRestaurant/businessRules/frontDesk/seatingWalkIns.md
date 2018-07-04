---
title: Seating Walk-Ins
---
# FrontDesk - Seating Walk-In Customers (GridView.SelectedIndexChanging)

A key aspect of the Front Desk is to seat walk-in customers at available tables. For the host, this should be easy: Simply choose an available table, identify the number of people and the waiter, and click the link to seat the customers. In the system, however, the process of seating customers must follow the workflow of the business:

1. Ensure the table is truly available and has the capacity for the number of customers.
2. Create a bill and assign the waiter and table.

It is worthwhile to note that in workflow for this restaurant, a Bill must be associated with either a single Table or with a Reservation, but not both. Also, the bill is created at the point in time that the customer is seated, with a waiter assigned to the table. The thought process behind this workflow is that the waiter can be notified that there is a new customer, and will be able to see when they were seated and how long they have been waiting to be served.

At present, this is the limit to the complexity of handling billing of customers in this restaurant; more realistic scenarios could easily have more complex bill processing, such as allowing people at the table to split a bill or multiple tables to combine a bill, or reservations to split their bills, etc.

## The Code…

- Create the BLL code to handle seating walk-in customers. BLL code

```csharp
[DataObjectMethod(DataObjectMethodType.Select)]
public List<seatingsummary> AvailableSeatingByDateTime(DateTime date, TimeSpan time)
{
    var result = from seats in SeatingByDateTime(date, time)
                    where !seats.Taken
                    select seats;
    return result.ToList();
}
```

```csharp
/// <summary>
/// Seats a customer that is a walk-in
/// </summary>
/// <param name="when">A mock value of the date/time (Temporary - see remarks)</param>
/// <param name="tableNumber">Table number to be seated</param>
/// <param name="customerCount">Number of customers being seated</param>
/// <param name="waiterId">Id of waiter that is serving</param>
public void SeatCustomer(DateTime when, byte tableNumber, int customerCount, int waiterId)
{
    var availableSeats = AvailableSeatingByDateTime(when.Date, when.TimeOfDay);
    using (var context = new RestaurantContext())
    {
        List<string> errors = new List<string>();
        // Rule checking:
        // - Table must be available - typically a direct check on the table, but proxied based on the mocked time here
        // - Table must be big enough for the # of customers
        if (!availableSeats.Exists(x => x.Table == tableNumber))
            errors.Add("Table is currently not available");
        else if (!availableSeats.Exists(x => x.Table == tableNumber && x.Seating >= customerCount))
            errors.Add("Insufficient seating capacity for number of customers.");
        if (errors.Count > 0)
            throw new BusinessRuleException("Unable to seat customer", errors);
        Bill seatedCustomer = new Bill()
        {
            BillDate = when,
            NumberInParty = customerCount,
            WaiterID = waiterId,
            TableID = context.Tables.Single(x=> x.TableNumber == tableNumber).TableID
        };
        context.Bills.Add(seatedCustomer);
        context.SaveChanges();
    }
}

```

- Modify the GridView to handle the OnSelectedIndexChanging event.

```xml
<asp:GridView ID="SeatingGridView" runat="server" AutoGenerateColumns="False"
    CssClass="table table-hover table-striped table-condensed"
    OnSelectedIndexChanging="SeatingGridView_SelectedIndexChanging"
    DataSourceID="SeatingObjectDataSource" ItemType="eRestaurant.Entities.DTOs.SeatingSummary">
```

- Write the code to handle the OnSelectedIndexChanging event.

```csharp
protected void SeatingGridView_SelectedIndexChanging(object sender, GridViewSelectEventArgs e)
{
    // Seat walk-in customers
    MessageUserControl.TryRun(() =>
    {
        // TODO: There are a lot of assumptions in parsing the input, and it would be better
        //       to break this into chunks an display appropriate "usage" messages to the end-user.
        // Get the controls
        GridViewRow row = SeatingGridView.Rows[e.NewSelectedIndex];
        var tableControl = row.FindControl("TableNumber") as Label;
        var numberInPartyControl = row.FindControl("NumberInParty") as TextBox;
        var waiterListControl = row.FindControl("WaiterList") as DropDownList;
        var when = DateTime.Parse(SearchDate.Text).Add(TimeSpan.Parse(SearchTime.Text));
        // Seat the customer
        var controller = new SeatingController();
        controller.SeatCustomer(when, byte.Parse(tableControl.Text), int.Parse(numberInPartyControl.Text), int.Parse(waiterListControl.SelectedValue));
        // Refresh the gridview
        SeatingGridView.DataBind();
    }, "Customer Seated", "New walk-in customer has been seated");
}
```

----

> Extra! Extra! Modifying the MessageUserControl.ascx to handle Business Rule Exceptions

TBA

```csharp
/// <summary>
/// Processes a request through a callback delegate within a try/catch block. Distinguished Entity Framework exceptions from general exceptions.
/// </summary>
/// <param name="callback">A delegate method to call within the try block</param>
/// <returns>True if the callback was successful (did not generate an exception); false otherwise</returns>
private bool TryCatch(ProcessRequest callback)
{
    try
    {
        callback();
        return true;
    }
    catch (BusinessRuleException ex)
    {
        HandleException(ex);
    }
    catch (DbEntityValidationException ex)
    {
        HandleException(ex);
    }
    catch (Exception ex)
    {
        HandleException(ex);
    }
    return false;
}
```

```csharp
/// <summary>
/// Handles a customer BusinessRuleExceptoin by displaying the details and the general error.
/// </summary>
/// <param name="ex"></param>
private void HandleException(BusinessRuleException ex)
{
    var details = from detail in ex.RuleDetails
                    select new
                    {
                        Error = detail
                    };
    ShowExceptions(details, ex.Message, STR_TITLE_ValidationErrors, STR_TITLE_ICON_warning, STR_PANEL_danger);
}
```
