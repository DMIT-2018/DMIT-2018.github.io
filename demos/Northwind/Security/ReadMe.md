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
        var startupRoles = ConfigurationManager.AppSettings["startupRoles"].Split(';');
        foreach(var role in startupRoles)
            roleManager.Create(new IdentityRole { Name = role });
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
