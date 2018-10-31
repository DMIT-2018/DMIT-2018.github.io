---
title: ASP.Net Identity
---
# ASP.NET Identity

> This discussion about using the built-in security features of ASP.Net Identity 2.x assume a **Web Application Project** using *Web Forms*. While details may vary for different starter templates, the general concepts remain the same.

## Customizing the `ApplicationUser`

In order to associate  a website user (`ApplicationUser`) with a particular employee or customer of Northwind, we will add a couple of properties to the `ApplicationUser` class that effectively work as "nullable foreign key" references to the `Employees` and `Customers` tables (though, without any foreign key constraints).

These new properties in the `ApplicationUser` will be generated as columns in the `AspNetUsers` database table.

```csharp
public class ApplicationUser : IdentityUser
{
    #region Custom Properties
    // An application user, in this web app, can be either an Employee or a Customer
    public int? EmployeeId { get; set; }
    public string CustomerId { get; set; }
    #endregion

    // ... other items remain untouched
}
```

## Seeding the Database

Generally, it's a good idea to ensure that your web application's database is pre-populated with any security roles and default users that your application will need. Specifically, you should consider specifying some user to be the "webmaster" for the site. The following sections detail one good way to accomplish this.

### AppSettings

The `<appSettings>` section of the `Web.config` file is a good place to put application-specific settings that you might want to be changing on the production site. The reason for using a configuration file is that it is simply a text file, and can be edited in any text editor such as NotePad. Also, the web server (IIS) will secure the `.config` files, make sure not to directly expose them to anyone via a web browser.

In the code below, a number of startup security roles are specified, along with details for the administrator account and other notable accounts. There's even a default password for when we want to programmatically add new users to the site.

```xml
  <appSettings>
    <add key="startupRoles" value="Administrators;Employees;Customers;RegisteredUsers" />
    <add key="adminUserName" value="Webmaster" />
    <add key="adminEmail" value="Webmaster@Northwind.tba" />
    <add key="adminPassword" value="Pa$$w0rd" />
    <add key="adminRole" value="Administrators" />
    <add key="customerRole" value="Customers" />
    <add key="employeeRole" value="Employees" />
    <add key="newUserPassword" value="Pa$$word1" />
  </appSettings>
```

### Database Initializer

Since ASP.Net Identity with Entity Framework is already configured to generate the security tables if they do not exist, a good plan to prepopulate the database is to use a **database initialization** class to do the work. The following is a simple example that uses the data from our `web.config` file to add those users and roles.

> Check out this tutorial about [Database Initialization Strategies in EF6](http://www.entityframeworktutorial.net/code-first/database-initialization-strategy-in-code-first.aspx).

```csharp
public class SecurityDbContextInitializer : CreateDatabaseIfNotExists<ApplicationDbContext>
{

    protected override void Seed(ApplicationDbContext context)
    {
        #region Seed the roles
        var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));
        var startupRoles = ConfigurationManager.AppSettings["startupRoles"].Split(';');
        foreach(var role in startupRoles)
            roleManager.Create(new IdentityRole { Name = role });
        #endregion

        #region Seed the users
        string adminUser = ConfigurationManager.AppSettings["adminUserName"];
        string adminRole = ConfigurationManager.AppSettings["adminRole"];
        string adminEmail = ConfigurationManager.AppSettings["adminEmail"];
        string adminPassword = ConfigurationManager.AppSettings["adminPassword"];
        var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));
        var result = userManager.Create(new ApplicationUser
        {
            UserName = adminUser,
            Email = adminEmail
        }, adminPassword);
        if (result.Succeeded)
            userManager.AddToRole(userManager.FindByName(adminUser).Id, adminRole);
        #endregion

        // ... etc. ...

        base.Seed(context);
    }
}

```

### Modifying `ApplicationDbContext`

In order for our database context to use the initializer we created in the previous step, we need to specify that in the constructor for our `ApplicationDbContext`.

```csharp
public ApplicationDbContext()
    : base("DefaultConnection", throwIfV1Schema: false)
{
    Database.SetInitializer<ApplicationDbContext>(new SecurityDbContextInitializer());
}
```

----

## Managing Users and Roles

The starter template for using ASP.Net Identity does not include a UI for managing users and roles. The following is a simple user/role management plan for Northwind Traders. It includes a `SecurityController` to act as a BLL in front of ASP Identity's UserManager and RoleManager, as well as a simple CRUD-based UI.

## Security Controller (CRUD)

This controller class provides basic CRUD-like services for users and roles.

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
        RoleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new ApplicationDbContext()));
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
        CheckResult(result);
    }

    [DataObjectMethod(DataObjectMethodType.Update)]
    public void UpdateUser(ApplicationUser user)
    {
        var existing = UserManager.FindById(user.Id);
        if (existing == null)
            throw new Exception("The specified user was not found");
        else if (existing.UserName == ConfigurationManager.AppSettings["adminUserName"] && existing.UserName != user.UserName)
            throw new Exception("You are not allowed to modify the website administrator's user name");
        // Change certain parts of the found user
        existing.EmployeeId = user.EmployeeId;
        existing.Email = user.Email;
        existing.CustomerId = user.CustomerId;
        existing.PhoneNumber = user.PhoneNumber;
        existing.UserName = user.UserName; // Generally NOT a good idea to change this!
        var result = UserManager.Update(existing);
        CheckResult(result);
    }

    [DataObjectMethod(DataObjectMethodType.Delete)]
    public void DeleteUser(ApplicationUser user)
    {
        var existing = UserManager.FindById(user.Id);
        if (existing == null)
            throw new Exception("The specified user was not found");
        else if (existing.UserName == ConfigurationManager.AppSettings["adminUserName"])
            throw new Exception("You are not allowed to delete the website administrator");
        var result = UserManager.Delete(existing);
        CheckResult(result);
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
        var existing = RoleManager.FindById(role.Id);
        if (existing == null)
            throw new Exception("The specified role could not be found");
        else if (existing.Name == ConfigurationManager.AppSettings["adminRole"])
            throw new Exception("Cannot rename the administrator role");
        existing.Name = role.Name;
        CheckResult(RoleManager.Update(existing));
    }

    [DataObjectMethod(DataObjectMethodType.Delete)]
    public void DeleteRole(IdentityRole role)
    {
        var existing = RoleManager.FindById(role.Id);
        if (existing == null)
            throw new Exception("The specified role could not be found");
        if (existing.Name == ConfigurationManager.AppSettings["adminRole"])
            throw new Exception("Cannot delete the administrator role");
        CheckResult(RoleManager.Delete(existing));
    }
    #endregion
}
```

## Security Management UI

> TBA
