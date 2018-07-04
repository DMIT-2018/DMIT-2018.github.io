---
title: Faking a Point In Time
---
# Faking a Point In Time

A key aspect of the functionality of the eRestaurant application - seating customers, taking and filling orders, etc. - is the role of *time*. Each of these aspects around serving the customer involve recording some timestamp:

- The date and time of reservations (Reservation.ReservationDate)
- When the customer is seated (esp. the time portion of Bills.BillDate)
- When the order is taken (Bills.OrderPlaced)
- When the order is ready (Bills.OrderReady)
- When the order is paid (Bills.OrderPaid)

In order to facilitate the manual testing of this functionality during the design & development of the web application, a means of "faking" the date/time would be very helpful. To that end, the first form (FrontDesk.aspx) will include a section at the top that allows us to set a date and time that represents a moment-in-time for the page's functionality. As such, this will allow us to see data that is in the past (and should not be modified), data that is in the "present" (that is, the point at which the last customer was served) and data in the "future" (after the last customer served).

- LinqPad for getting last bill (max of BillDate) LinqPad code

```csharp
void Main()
{
    // Use a Lambda expression to get the maximum.
    // A lambda is simply a shorthand version of a function call
    // that is ideal for anonymous delegates.
    Bills.Max( x => x.BillDate ).Dump();

    // Here is the "longer" version using an actual method name
    // that we pass in to the Max() method.
    // Note that the Max() method is overloaded, therefore we
    // need to specify in the generic identifier of the method
    // which version we are using
    Bills.Max<Bills,DateTime>(GetProperty).Dump();
}
// Define other methods and classes here
private DateTime GetProperty(Bills x)
{
    return x.BillDate;
}
```

- Create `AdHocController.GetLastBillDateTime()` AdHocController

```csharp
namespace eRestaurant.BLL
{
    [DataObject]
    public class AdHocController
    {
        [DataObjectMethod(DataObjectMethodType.Select)]
        public DateTime GetLastBillDateTime()
        {
            using (var context = new RestaurantContext())
            {
                var result = context.Bills.Max(x => x.BillDate);
                return result;
            }
        }
    }
}
```

- Modify FrontDesk.aspx
  - Frame out a "well" (Bootstrap styling)
  - Show last billed date/time - use a Repeater (ObjectDataSource rather than code-behind)
  - Use `ItemType="System.DateTime"` in the repeater and `<%# Item.ToShortDateString() %>` & `<%# Item.ToShortTimeString() %>`
  - Add textboxes for a SearchDate and SearchTime
  - Add linkbuttons for postback (will trigger other ODS controls that consume the textboxes for mock date/time) and for setting the date/time textboxes to the last billed date time (will need code-behind)
  - ***bLiNg*** - add in the clockpicker for extra fun.

```xml
<div class="well">
    <div class="pull-right col-md-5">
        <h4>
            <small>Last Billed Date/Time:</small>
            <asp:Repeater ID="AdHocBillDateRepeater" runat="server" DataSourceID="AdHocBillDateDataSource" ItemType="System.DateTime">
                <itemtemplate><b class="label label-primary"><%# Item.ToShortDateString() %></b> &ndash; <b class="label label-info"><%# Item.ToShortTimeString() %></b></itemtemplate>
            </asp:Repeater>
        </h4>
        <asp:ObjectDataSource runat="server" ID="AdHocBillDateDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="GetLastBillDateTime" TypeName="eRestaurant.BLL.AdHocController"></asp:ObjectDataSource>
    </div>
    <h4>Mock Date/Time</h4>
    <asp:LinkButton ID="MockDateTime" runat="server" CssClass="btn btn-primary">Post-back new date/time:</asp:LinkButton>
    <asp:LinkButton ID="MockLastBillingDateTime" runat="server" CssClass="btn btn-default" OnClick="MockLastBillingDateTime_Click">Set to Last-Billed date/time:</asp:LinkButton>
    &nbsp;
    <asp:TextBox id="SearchDate" runat="server" TextMode="Date" Text="2014-10-16"></asp:TextBox>
    <asp:TextBox id="SearchTime" runat="server" TextMode="Time" Text="13:00" CssClass="clockpicker"></asp:TextBox>
    <!-- Insert a fancy clock-picker for a little "bling" -->
    <script src="../Scripts/clockpicker.js"></script>
    <script type="text/javascript">
    $('.clockpicker').clockpicker({ donetext: 'Accept' });
    </script>
    <link itemprop="url" href="../Content/standalone.css" rel="stylesheet">
    <link itemprop="url" href="../Content/clockpicker.css" rel="stylesheet">
    &nbsp;&nbsp;
    <details style="display:inline-block; vertical-align: top;">
        <summary class="badge">About ClockPicker &hellip;</summary>
        <h4>Fancy Bootstrap <a href="http://weareoutman.github.io/clockpicker/">ClockPicker</a></h4>
        <p>The time uses the ClockPicker Bootstrap extension</p>
    </details>
</div>
```
