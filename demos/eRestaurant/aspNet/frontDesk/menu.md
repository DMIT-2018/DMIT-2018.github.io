---
title: Occupied Tables
---
# FrontDesk - Refactoring the Occupied Tables display (Template fields, asp:Panels, and Bootstrap)

Now that the raw data is available to our page, it is time to refactor the markup to improve the presentation of the data. As you work on rafactoring the display, be sure to frequently view the page in the browser to ensure you are getting the look you want.

- Add a DTO/POCO class to represent a waiter on duty.

```csharp
public class WaiterOnDuty
{
    public int WaiterId { get; set; }
    public string FullName { get; set; }
}
```

- Add a method on the BLL's OrderController to get a list of waiters (these should be waiters that are still employed)

```csharp
/// <summary>
/// ListWaiters returns the id and full name of all the current waiters
/// </summary>
/// <returns></returns>
[DataObjectMethod(DataObjectMethodType.Select, false)]
public List<WaiterOnDuty> ListWaiters()
{
    using (var context = new RestaurantContext())
    {
        var result = from person in context.Waiters
                        where person.ReleaseDate == null
                        select new WaiterOnDuty()
                        {
                            WaiterId = person.WaiterID,
                            FullName = person.FirstName + " " + person.LastName
                        };
        return result.ToList();
    }
}
```

- Add to the FrontDesk.aspx  an ObjectDataSourceconfigured to get the list of active waiters.

```xml
<asp:ObjectDataSource runat="server" ID="WaitersDataSource" OldValuesParameterFormatString="original_{0}"
    SelectMethod="ListWaiters" TypeName="eRestaurant.BLL.OrderController"></asp:ObjectDataSource>
```

- Modify the GridView to use a TemplateField instead of BoundFields for the columns. The TemplateField makes use of `<asp:Panel>` controls to contain content that is shown conditionally, depending on whether the seat is currently occupied or not. If the seat is available, show a form that allows the host to seat walk-in customers. If the seat is occupied, show the details for that table's occupancy. Also apply Bootstrap styles for table and form elements.
  - The following markup includes Boostrap-specific styling. Also, when developing the GridView, begin by letting Visual Studio generate the BoundFields for the GridView. Then, view the results in the browser and, piece by piece, replace some of the BoundFields with the presentation in the TemplateField.
  - When working with DataBound controls such as the GridView, you can set the control's `Itemtype` property to the fully-qualified name of the DTO/POCO class that you are displaying in the control.

```xml
<div class="col-md-7">
    <details open>
        <summary>Tables</summary>
        <p class="well">This GridView uses a <asp:TemplateField …> for the table number and the controls to handle walk-in seating. Additionally, the walk-in seating form is in a panel that only shows if the seat is <em>not</em> taken. Handling of the action to <b>seat customers</b> is done in the code-behind, on the GridView's <code>OnSelectedIndexChanging</code> event.</p>
        <style type="text/css">
            .inline-div {
                display: inline;
            }
        </style>
        <asp:GridView ID="SeatingGridView" runat="server" AutoGenerateColumns="False"
                CssClass="table table-hover table-striped table-condensed"
                DataSourceID="SeatingObjectDataSource" ItemType="eRestaurant.Entities.DTOs.SeatingSummary">
            <Columns>
                <asp:CheckBoxField DataField="Taken" HeaderText="Taken" SortExpression="Taken" ItemStyle-HorizontalAlign="Center"></asp:CheckBoxField>
                <asp:TemplateField HeaderText="Table" SortExpression="Table" ItemStyle-HorizontalAlign="Center">
                    <ItemTemplate>
                        <asp:Label ID="TableNumber" runat="server" Text='<%# Item.Table %>'></asp:Label>
                    </ItemTemplate>
                </asp:TemplateField>
                <asp:BoundField DataField="Seating" HeaderText="Seating" SortExpression="Seating" ItemStyle-HorizontalAlign="Center"></asp:BoundField>
                <asp:TemplateField HeaderText="Reservation Notes / Seat Walk-In">
                    <ItemTemplate>
                        <asp:Panel ID="WalkInSeatingPanel" runat="server" CssClass="input-group input-group-sm"
                                Visible='<%# !Item.Taken %>'>
                            <asp:TextBox ID="NumberInParty" runat="server" CssClass="form-control col-md-1"
                                    TextMode="Number" placeholder="# people"></asp:TextBox>
                            <span class="input-group-addon">
                                <asp:DropDownList ID="WaiterList" runat="server"
                                        CssClass="selectpicker"
                                        AppendDataBoundItems="true" DataSourceID="WaitersDataSource"
                                        DataTextField="FullName" DataValueField="WaiterId">
                                    <asp:ListItem Value="0">[select a waiter]</asp:ListItem>
                                </asp:DropDownList>
                            </span>
                            <span class="input-group-addon" style="width:5px;padding:0;border:0;background-color:white;"></span>
                            <asp:LinkButton ID="LinkButton1" runat="server" Text="Seat Customers"
                                CssClass="input-group-btn" CommandName="Select" CausesValidation="False" />
                        </asp:Panel>
                        <asp:Panel ID="OccupiedTablePanel" runat="server"
                                Visible='<%# Item.Taken  %>'>
                            <%# Item.Waiter %>
                            <asp:Label ID="ReservationNameLabel" runat="server" 
                                    Text='<%# "&mdash;" + Item.ReservationName %>'
                                    Visible='<%# !string.IsNullOrEmpty(Item.ReservationName) %>' />
                            <asp:Panel ID="BillInfo" runat="server" CssClass="inline-div"
                                    Visible='<%# Item.BillTotal.HasValue && Item.BillTotal.Value > 0 %>'>
                                <asp:Label ID="Label1" runat="server" Text='<%# string.Format(" &ndash; {0:C}", Item.BillTotal) %>' />
                            </asp:Panel>
                        </asp:Panel>
                    </ItemTemplate>
                </asp:TemplateField>
            </Columns>
        </asp:GridView>
    </details>
</div>
<asp:ObjectDataSource runat="server" ID="SeatingObjectDataSource" OldValuesParameterFormatString="original_{0}" SelectMethod="SeatingByDateTime" TypeName="eRestaurant.BLL.SeatingController">
    <SelectParameters>
        <asp:ControlParameter ControlID="SearchDate" PropertyName="Text" Name="date" Type="DateTime"></asp:ControlParameter>
        <asp:ControlParameter ControlID="SearchTime" PropertyName="Text" DbType="Time" Name="time"></asp:ControlParameter>
    </SelectParameters>
</asp:ObjectDataSource>
```

## Sample/Demo

Estimated time to complete this demo is 7 minutes.

The following steps demonstrate how to use a Repeater control in a web form.

1. First of all, you need a source of menu items to load on a page. To serve these, create a class in the BLL that will get all the menu items, eagerly loading the category information. (Eager loading is performed using the `Include()` method of the `DbSet<T>` class.)

```csharp
[DataObject]
public class MenuController
{
    [DataObjectMethod(DataObjectMethodType.Select, false)]
    public List<Item> ListMenuItems()
    {
        using (var context = new RestaurantContext())
        {
            // Note: To use the Lambda or Method style of Include, you need to use System.Data.Entity
            return context.Items.Include(it => it.Category).ToList();
        }
    }
}
```

2. Next, in the MenuItems.aspx page, add a repeater and give it the ID of MenuRepeater.

```xml
<asp:Repeater ID="MenuRepeater" runat="server"></asp:Repeater>
```

3. Add an ObjectDataSource control to your page, referencing it in your repeater control.

```xml
<asp:Repeater ID="MenuRepeater" runat="server" DataSourceID="MenuDataSource"></asp:Repeater>
<asp:ObjectDataSource runat="server" ID="MenuDataSource" 
    OldValuesParameterFormatString="original_{0}" SelectMethod="ListMenuItems" 
    TypeName="eRestaurant.BLL.MenuController">
</asp:ObjectDataSource>
```

4. Add an ItemTemplate to display the menu data. Note that there is no need to use labels or any other ASP.NET controls as containers, since the information on this page is for display only. Notice that in binding to the `Item` entity, we can "drill" into the `Category` property because this information was eagerly loaded in the BLL.

```xml
    <ItemTemplate>
        <%# ((decimal)Eval("CurrentPrice")).ToString("C") %> 
        &mdash; <%# Eval("Description") %> &ndash; <%# Eval("Category.Description") %> 
        &ndash; <%# Eval("Calories") %> Calories
    </ItemTemplate>
```

5. Add a SeparatorTemplate and embed an `<hr />` tag.
