---
title: Adding a Web.sitemap
---
# eRestaurant Site Map

## Adding a Web.sitemap

1. Add a new Sitemap control to the root of your website. Leave the default name of Web.sitemap
2. Edit the contents to match the following:

```xml
<?xml version="1.0" encoding="utf-8" ?>
<siteMap xmlns="http://schemas.microsoft.com/AspNet/SiteMap-File-1.0" >
    <siteMapNode title="eRestaurant"  description="eRestaurant">
    <siteMapNode url="~/Default.aspx" title="Home"  description="eRestaurant - Simple-Tasty-Elegant" />
    <siteMapNode url="~/MenuItems.aspx" title="Our Menu"  description="Our Menu Items" />
    <siteMapNode url="~/Reservations.aspx" title="Reservations"  description="Reservations" />
    <siteMapNode title="Staff"  description="Front Desk, Waiters, and Kitchen Staff" >
        <siteMapNode url="~/Staff/KitchenOrders.aspx" title="Kitchen Orders" description="Kitchen Ordering Queue" />
        <siteMapNode url="~/Staff/FrontDesk.aspx" title="Front Desk" description="Seating and Reservations" />
        <siteMapNode url="~/Staff/ServingTables.aspx" title="Tables and Waiters" description="Table Serving" />
    </siteMapNode>
    <siteMapNode title="About Us"  description="History, Contact Info, and Maps" >
        <siteMapNode url="~/Contact.aspx" title="Contact" description="Location and Contact Information" />
        <siteMapNode url="~/About.aspx" title="History" description="eRestaurant - Our History" />
    </siteMapNode>
    <siteMapNode title="Admin"  description="Managerial Services">
        <siteMapNode url="~/Admin/SpecialEvents.aspx" title="Special Events"  description="Manage the Special Events for Reservations" />
        <siteMapNode url="~/Admin/ManageTables.aspx" title="Tables"  description="Manage the Restaurant Seating/Tables" />
        <siteMapNode url="~/Admin/ManageMenuItems.aspx" title="Items"  description="Manage the Menu" />
        <siteMapNode url="~/Admin/ManageWaiters.aspx" title="Waiters"  description="Staff Management" />
    </siteMapNode>
    </siteMapNode>
</siteMap>
```

3. For each of the paths in the site map above, create the corresponding web form (with master pages).

## Applying Web.sitemap to your Site.master file

1. Remove the existing hard-coded `<ul>` of the navigation links (just above the `<asp:LoginView>` control)
2. Add an `<asp:Menu>` and a `<asp:SiteMapDataSource>` control in place of the hard-coded `<ul>`

```xml
<asp:Menu ID="SiteNav" runat="server" DataSourceID="SiteNavDataSource"
    CssClass="" Orientation="Horizontal" StaticDisplayLevels="1" IncludeStyleBlock="false"
    StaticMenuStyle-CssClass="nav navbar-nav" StaticSelectedStyle-CssClass="active"
    DynamicMenuStyle-CssClass="dropdown-menu" EnableViewState="false" EnableTheming="false"></asp:Menu>
<asp:SiteMapDataSource ID="SiteNavDataSource" runat="server"
    ShowStartingNode="false" />
```

3. Visual Studio 2013 uses website templates that leverage Bootstrap for styling. To make the menu control work well with Bootstrap styling, add the following JavaScript just below the menu control.

```html
<script>
/* Remove float styling that was injected for the menu control */

$(function () {
    // Isolate the context for applying Bootstrap styling
    $('#SiteNav').next().removeAttr('style');
});
</script>
```
