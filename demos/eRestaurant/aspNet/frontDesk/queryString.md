---
title: Serving Tables
---
# FrontDesk - Navigating to other pages (ServingTables.aspx)

The display of the table occupancy in the restaurant includes identifying the waiter for any occupied tables. We can modify the display of the waiter name to act as a link to the ServingTables.aspx page where the Waiter is able to see all their current tables and the stage at which the customers have been served (seated, order placed, order ready, order served). The ServingTables page will also (eventually) allow a waiter to take the customer's meal order.

- Create a page called ServingTables.aspx that is ready to receive querystring data (temporary output on page).

```xml
<h1>Serving Tables</h1>
<details class="well">
    <summary>About this Page...</summary>
    <p>This page demonstrates the following features/characteristics.</p>
    <ul>
        <li>Waiter First Name = '<%= this.Request.QueryString["waiter"] %>'<br />
        <code>Request.QueryString["waiter"]</code> = The first name of the waiter</li>
        <li>Bill ID = '<%= this.Request.QueryString["bill"] %>'<br />
        <code>Request.QueryString["bill"]</code> = The ID of the bill</li>
        <li>Mock-Date (ticks) = '<%= this.Request.QueryString["md"] %>'<br />
        <code>Request.QueryString["md"]</code> = The date (in ticks) that was being used on the Front Desk form</li>
        <li>Mock-Time (ticks) = '<%= this.Request.QueryString["mt"] %>'<br />
        <code>Request.QueryString["mt"]</code> = The time (in ticks) that was being used on the Front Desk form</li>
    </ul>
</details>
```

- In FrontDesk.aspx, modify the waiter name to be a hyperlink to ServingTables.aspx, passing information as querystring data. Note how we are passing the date/time information as `.Ticks` in the querystring, and that we are using the UserControl DateTimeMocker.ascx.

```xml
<asp:Panel ID="OccupiedTablePanel" runat="server"
        Visible='<%# Item.Taken  %>'>
    <asp:HyperLink ID="ServeTablesLink" runat="server"
        NavigateUrl='<%# string.Format("~/Staff/ServingTables.aspx?waiter={0}&bill={1}&md={2}&mt={3}", Item.Waiter, Item.BillID, Mocker.MockDate.Ticks, Mocker.MockTime.Ticks) %>'><%# Item.Waiter %></asp:HyperLink>
    <asp:Label ID="ReservationNameLabel" runat="server" 
            Text='<%# "&mdash;" + Item.ReservationName %>'
            Visible='<%# !string.IsNullOrEmpty(Item.ReservationName) %>' />
    <asp:Panel ID="BillInfo" runat="server" CssClass="inline-div"
            Visible='<%# Item.BillTotal.HasValue && Item.BillTotal.Value > 0 %>'>
        <asp:Label ID="Label1" runat="server" Text='<%# string.Format(" &ndash; {0:C}", Item.BillTotal) %>' />
        <asp:LinkButton ID="PayBill" runat="server" Text="&ndash; Pay Bill" CausesValidation="False"
            Visible='<%# ! Item.Paid %>' Enabled='<%# Item.Served %>'
            CommandName="PayBill" CommandArgument='<%# Item.BillID %>' OnCommand="ProcessBill_OnCommand" />
    </asp:Panel>
    <asp:Panel ID="ClearTablePanel" runat="server" CssClass="inline-div"
            Visible='<%# !Item.BillTotal.HasValue || Item.BillTotal.Value == 0 %>'>
        <asp:LinkButton ID="ClearTable" runat="server" Text="&ndash; Clear/Cancel Table" CausesValidation="False"
            CommandName="ClearTable" CommandArgument='<%# Item.BillID %>' OnCommand="ProcessBill_OnCommand" />
    </asp:Panel>
</asp:Panel>
```

> For background reading, take a look at this article: [Nine Options for Managing Persistent User State in Your ASP.NET Application](http://msdn.microsoft.com/en-us/magazine/cc300437.aspx) (2003)
