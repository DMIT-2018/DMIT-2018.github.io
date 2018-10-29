---
title: ASP.Net Identity
---
# ASP.NET Identity

> This discussion about using the built-in security features of ASP.Net Identity 2.x assume a **Web Application Project** using *Web Forms*. While details may vary for different starter templates, the general concepts remain the same.

## Customizing the `ApplicationUser`

```csharp
public class ApplicationUserManager : UserManager<ApplicationUser>
{
    #region Custom Properties
    public int? EmployeeId { get; set; }
    public string CustomerId { get; set; }
    #endregion

    // ... other items remain untouched
}
```

## Seeding the Database

### AppSettings

```xml
  <appSettings>
    <add key="adminUserName" value="Webmaster" />
    <add key="adminEmail" value="Webmaster@Northwind.tba" />
    <add key="adminPassword" value="Pa$$w0rd" />
    <add key="adminRole" value="Administrators" />
    <add key="startupRoles" value="Administrators;Employees;Customers;RegisteredUsers" />
    <add key="customerRole" value="Customers" />
    <add key="employeeRole" value="Employees" />
    <add key="newUserPassword" value="Pa$$word1" />
  </appSettings>
```

### Database Initializer

> Check out the following tutorial about [Database Initialization Strategies in EF6](http://www.entityframeworktutorial.net/code-first/database-initialization-strategy-in-code-first.aspx).

```csharp
public class SecurityDbContextInitializer : CreateDatabaseIfNotExists<ApplicationDbContext>
{

    protected override void Seed(ApplicationDbContext context)
    {
        #region Seed the roles
        string adminRole = ConfigurationManager.AppSettings["adminRole"];
        var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
        roleManager.Create(new IdentityRole { Name = adminRole });
        #endregion

        #region Seed the users
        string adminUser = ConfigurationManager.AppSettings["adminUserName"];
        var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));
        var result = userManager.Create(new ApplicationUser
        {
            UserName = adminUser,
            Email = ConfigurationManager.AppSettings["adminEmail"]
        }, ConfigurationManager.AppSettings["adminPassword"]);
        if (result.Succeeded)
            userManager.AddToRole(userManager.FindByName(adminUser).Id, adminRole);
        #endregion

        // ... etc. ...

        base.Seed(context);
    }
}

```

### Modifying `ApplicationDbContext`

```csharp
public ApplicationDbContext()
    : base("DefaultConnection", throwIfV1Schema: false)
{
    Database.SetInitializer<ApplicationDbContext>(new SecurityDbContextInitializer());
}
```

## Security Controller (CRUD)

```csharp
[DataObject]
public class SecurityController
{
    #region Constructor & Dependencies
    private readonly ApplicationUserManager UserManager;
    private readonly RoleManager<IdentityRole> RoleManager;
    public SecurityController()
    {
        UserManager = HttpContext.Current.Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
        RoleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>());
    }

    internal void AddUser(ApplicationUser user, string password, params string[] roles)
    {
        var result = UserManager.Create(user, password);
        if(result.Succeeded)
        {
            foreach(var role in roles)
                UserManager.AddToRole(UserManager.FindByName(user.UserName).Id, role);
        }
    }
    #endregion

    #region ApplicationUser CRUD
    [DataObjectMethod(DataObjectMethodType.Select)]
    public List<ApplicationUser> ListUsers()
    {
        return UserManager.Users.ToList();
    }

    private void CheckResult(IdentityResult result)
    {
        if (!result.Succeeded)
            throw new Exception($"Failed to add new user:<ul> {string.Join(string.Empty, result.Errors.Select(x => $"<li>{x}</li>"))}</ul>");
    }

    [DataObjectMethod(DataObjectMethodType.Insert)]
    public void AddUser(ApplicationUser user)
    {
        IdentityResult result = UserManager.Create(user, ConfigurationManager.AppSettings["newUserPassword"]);
    }

    [DataObjectMethod(DataObjectMethodType.Update)]
    public void UpdateUser(ApplicationUser user)
    {
        var existing = UserManager.FindById(user.Id);
        if (existing != null)
        {
            var result = UserManager.Update(user);
            CheckResult(result);
        }
    }

    [DataObjectMethod(DataObjectMethodType.Delete)]
    public void DeleteUser(ApplicationUser user)
    {
        var existing = UserManager.FindById(user.Id);
        if (existing != null)
        {
            var result = UserManager.Delete(user);
            CheckResult(result);
        }
    }
    #endregion

    #region IdentityRole CRUD
    [DataObjectMethod(DataObjectMethodType.Select)]
    public List<IdentityRole> ListRoles()
    {
        return RoleManager.Roles.ToList();
    }

    [DataObjectMethod(DataObjectMethodType.Insert)]
    public void AddRole(IdentityRole role)
    {
        CheckResult(RoleManager.Create(role));
    }

    [DataObjectMethod(DataObjectMethodType.Update)]
    public void UpdateRole(IdentityRole role)
    {
        CheckResult(RoleManager.Update(role));
    }

    [DataObjectMethod(DataObjectMethodType.Delete)]
    public void DeleteRole(IdentityRole role)
    {
        CheckResult(RoleManager.Delete(role));
    }
    #endregion
}
```
## Security Management UI


```xml
    <div class="row">
        <div class="col-md-9">
            <h2>Users</h2>
            <asp:ListView ID="UsersListView" runat="server"
                DataSourceID="UsersDataSource" DataKeyNames="Id"
                InsertItemPosition="FirstItem"
                ItemType="WebApp.Models.ApplicationUser">
                <EditItemTemplate>
                    <tr style="">
                        <td>
                            <asp:Button runat="server" CommandName="Update" Text="Update" ID="UpdateButton" />
                            <asp:Button runat="server" CommandName="Cancel" Text="Cancel" ID="CancelButton" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.UserName %>' runat="server" ID="UserNameTextBox" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.EmployeeId %>' runat="server" ID="EmployeeIdTextBox" />
                            <asp:TextBox Text='<%# BindItem.CustomerId %>' runat="server" ID="CustomerIdTextBox" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.Email %>' runat="server" ID="EmailTextBox" />
                            <asp:TextBox Text='<%# BindItem.PhoneNumber %>' runat="server" ID="PhoneNumberTextBox" />

                        </td>
                        <td>
                        </td>
                    </tr>
                </EditItemTemplate>
                <InsertItemTemplate>
                    <tr style="">
                        <td>
                            <asp:Button runat="server" CommandName="Insert" Text="Insert" ID="InsertButton" />
                            <asp:Button runat="server" CommandName="Cancel" Text="Clear" ID="CancelButton" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.UserName %>' runat="server" ID="UserNameTextBox" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.EmployeeId %>' runat="server" ID="EmployeeIdTextBox" />
                            <asp:TextBox Text='<%# BindItem.CustomerId %>' runat="server" ID="CustomerIdTextBox" />
                        </td>
                        <td>
                            <asp:TextBox Text='<%# BindItem.Email %>' runat="server" ID="EmailTextBox" />
                            <asp:TextBox Text='<%# BindItem.PhoneNumber %>' runat="server" ID="PhoneNumberTextBox" /></td>
                        <td></td>
                    </tr>
                </InsertItemTemplate>
                <ItemTemplate>
                    <tr style="">
                        <td>
                            <asp:Button runat="server" CommandName="Delete" Text="Delete" ID="DeleteButton" />
                            <asp:Button runat="server" CommandName="Edit" Text="Edit" ID="EditButton" />
                        </td>
                        <td>
                            <asp:Label Text='<%# Item.UserName %>' runat="server" ID="UserNameLabel" />
                            <br />
                            <small>(<asp:Label Text='<%# Item.Id %>' runat="server" ID="IdLabel" />)</small>
                        </td>
                        <td>
                            <asp:Label Text='<%# Item.EmployeeId %>' runat="server" ID="EmployeeIdLabel" />
                            <asp:Label Text='<%# Item.CustomerId %>' runat="server" ID="CustomerIdLabel" />
                        </td>
                        <td>
                            <asp:Label Text='<%# Item.Email %>' runat="server" ID="EmailLabel" />
                            <asp:Label Text='<%# Item.PhoneNumber %>' runat="server" ID="PhoneNumberLabel" /></td>
                        <td>
                            <asp:Label Text='<%# string.Join(", ", Item.Roles.Select(x => x.RoleId)) %>' runat="server" ID="RolesLabel" /></td>
                    </tr>
                </ItemTemplate>
                <LayoutTemplate>
                    <table runat="server">
                        <tr runat="server">
                            <td runat="server">
                                <table runat="server" id="itemPlaceholderContainer" class="table table-condensed table-hover">
                                    <tr runat="server" style="">
                                        <th runat="server"></th>
                                        <th runat="server">UserName (Id)</th>
                                        <th runat="server">Employee / Customer</th>
                                        <th runat="server">Email / PhoneNumber</th>
                                        <th runat="server">Roles</th>
                                    </tr>
                                    <tr runat="server" id="itemPlaceholder"></tr>
                                </table>
                            </td>
                        </tr>
                        <tr runat="server">
                            <td runat="server" style="">
                                <asp:DataPager runat="server" ID="DataPager1">
                                    <Fields>
                                        <asp:NextPreviousPagerField ButtonType="Button" ShowFirstPageButton="True" ShowNextPageButton="False" ShowPreviousPageButton="False"></asp:NextPreviousPagerField>
                                        <asp:NumericPagerField></asp:NumericPagerField>
                                        <asp:NextPreviousPagerField ButtonType="Button" ShowLastPageButton="True" ShowNextPageButton="False" ShowPreviousPageButton="False"></asp:NextPreviousPagerField>
                                    </Fields>
                                </asp:DataPager>
                            </td>
                        </tr>
                    </table>
                </LayoutTemplate>
            </asp:ListView>
        </div>
        <div class="col-md-3">
            <h2>Roles</h2>
            <asp:ListView ID="RolesListView" runat="server"
                 DataSourceID="RolesDataSource" DataKeyNames="Id" InsertItemPosition="FirstItem"
                 ItemType="Microsoft.AspNet.Identity.EntityFramework.IdentityRole">
                <LayoutTemplate><div id="itemPlaceholder" runat="server"></div></LayoutTemplate>
                <ItemTemplate>
                    <div><%# Item.Name %></div>
                </ItemTemplate>
                <EditItemTemplate>
                    <div></div>
                </EditItemTemplate>
                <InsertItemTemplate>
                    <div></div>
                </InsertItemTemplate>
            </asp:ListView>
        </div>
    </div>

    <asp:ObjectDataSource ID="UsersDataSource" runat="server"
        DataObjectTypeName="WebApp.Models.ApplicationUser"
        DeleteMethod="DeleteUser"
        InsertMethod="AddUser"
        OldValuesParameterFormatString="original_{0}"
        SelectMethod="ListUsers"
        TypeName="WebApp.Admin.Security.SecurityController"
        UpdateMethod="UpdateUser"
        OnUpdated="CheckForExceptions"
        OnInserted="CheckForExceptions"
        OnDeleted="CheckForExceptions"></asp:ObjectDataSource>

    <asp:ObjectDataSource ID="RolesDataSource" runat="server"
        DataObjectTypeName="Microsoft.AspNet.Identity.EntityFramework.IdentityRole"
        DeleteMethod="DeleteRole"
        InsertMethod="AddRole"
        OldValuesParameterFormatString="original_{0}"
        SelectMethod="ListRoles"
        TypeName="WebApp.Admin.Security.SecurityController"
        UpdateMethod="UpdateRole"
        OnUpdated="CheckForExceptions"
        OnInserted="CheckForExceptions"
        OnDeleted="CheckForExceptions"></asp:ObjectDataSource>
```
