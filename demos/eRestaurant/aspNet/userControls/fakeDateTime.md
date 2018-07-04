---
title: Fake DateTime
---
# Refactoring - Creating a User Control to Fake DateTime

In this task, we take the markup and associated code-behind that allows us to set a "fake" time for our pages' controls and move it to a User Control so that it can be placed on other pages (we will be placing it on the ServingTables.aspx page).

- Create a User Control for faking date/time
- Cut the markup out of the FrontDesk.aspx and place it in the user control. User Control - Mockup

```html
<div class="well">
    <div class="pull-right col-md-5">
        <h4>
        <small>Last Billed Date/Time:</small>
        <asp:Repeater ID="AdHocBillDateRepeater" runat="server" DataSourceID="AdHocBillDateDataSource" ItemType="System.DateTime">
            <ItemTemplate><b class="label label-primary"><%# Item.ToShortDateString() %></b> &ndash; <b class="label label-info"><%# Item.ToShortTimeString() %></b></ItemTemplate>
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

- Cut the associated code-behind methods from FrontDesk.aspx.cx and place it in the user control's code-behind. User Control - code-behind

```csharp
    protected void MockLastBillingDateTime_Click(object sender, EventArgs e)
    {
        var controller = new AdHocController();
        var info = controller.GetLastBillDateTime();
        SearchDate.Text = info.ToStringHtml5Date();
        SearchTime.Text = info.ToStringHtml5Time();
    }
```

- Add additional properties to the User Control to allow containing pages to get or set the mocked date/time. User Control - code-behind

```csharp
    public DateTime MockDate
    {
        get
        {
            DateTime date = DateTime.MinValue;
            DateTime.TryParse(SearchDate.Text, out date);
            return date;
        }
        set
        {
            SearchDate.Text = value.ToString("yyyy-MM-dd");
        }
    }
    public TimeSpan MockTime
    {
        get
        {
            TimeSpan time = TimeSpan.MinValue;
            TimeSpan.TryParse(SearchTime.Text, out time);
            return time;
        }
        set
        {
            SearchTime.Text = DateTime.Today.Add(value).ToString("HH:mm:ss"); // HH is 24 hour clock, hh is 12 hour clock
        }
    }
```

- Place the User Control on the FrontDesk.aspx Markup code

```xml
<%@ Register Src="~/UserControls/DateTimeMocker.ascx" TagPrefix="my" TagName="DateTimeMocker" %>
    <!-- other code … -->
    <my:MessageUserControl runat="server" id="MessageUserControl" />
```

- Modify the places where the markup for FrontDesk.aspx was using the SearchDate and SearchTime textboxes to now use the UserControl's public properties. Markup code

```xml
    <%--For the Seating Reservations Repeater--%>
<asp:ObjectDataSource runat="server" ID="ReservationsByTimeDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="ReservationsByTime" TypeName="eRestaurant.BLL.SeatingController">
<selectparameters>
<asp:controlparameter controlid="Mocker" propertyname="MockDate" name="date" type="DateTime"></asp:controlparameter>
        </selectparameters>
    </asp:ObjectDataSource>
    <%--For the Tables GridView--%>
<asp:ObjectDataSource runat="server" ID="SeatingObjectDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="SeatingByDateTime" TypeName="eRestaurant.BLL.SeatingController">
<selectparameters>
<asp:controlparameter controlid="Mocker" propertyname="MockDate" name="date" type="DateTime"></asp:controlparameter>
<asp:controlparameter controlid="Mocker" propertyname="MockTime" dbtype="Time" name="time"></asp:controlparameter>
        </selectparameters>
    </asp:ObjectDataSource>
```

- Modify the places in FrontDesk.aspx.cs where the code was referencing SearchDate/SearchTime to now use the UserControl's public properties. Code-behind
  - The following line needs to be changed in `SeatingGridView_SelectedIndexChanging()` and `ReservationSummaryListView_OnItemCommand()` to get the date and time from the user control.

```csharp
var when = Mocker.MockDate.Add(Mocker.MockTime);
```
