---
title: ASP.NET Identity
---
# ASP.NET Identity

ASP.NET Identity is available through two NuGet packages.

Microsoft ASP.NET Identity Core
  ~ This contains the core interfaces for ASP.NET Identity, with minimal implementations. This package has no dependencies.

Microsoft ASP.NET Identity EntityFramework
  ~ This package provides an implementation of ASP.NET Identity that uses the Entity Framework. As such, this package has dependencies on both the Microsoft ASP.NET Identity Core and the Entity Framework.

## Identity and Owin in VS2013 Web Site Template

ASP.NET Identity EntityFramework and OWIN are included as part of the default template for an ASP.NET Web Forms web site in Visual Studio 2013. The core aspects of Identity are in the `~/App_Code/IdentityModel.cs` but are also referenced in the pages under the `~/Account/` folder. The classes in IdentityModel.cs that build on ASP.NET Identity are:

ApplicationUser
  ~ This is an entity class that represents a user in the system. It inherits from `IdentityUser` which provides the core implementation of the [IUser](http://msdn.microsoft.com/en-us/library/microsoft.aspnet.identity.iuser(v=vs.108).aspx) interface in the Identity Core.

ApplicationDbContext
  ~ This class acts as the database context class (DAL) and inherits from [IdentityDbContext<ApplicationUser>](http://msdn.microsoft.com/en-us/library/dn468176(v=vs.108).aspx). This class has a default constructor which specifies the connection string name to use (DefaultConnection) in the web.config file.

UserManager
  ~ The UserManager class inherits from [UserManager<ApplilcationUser>](http://msdn.microsoft.com/en-us/library/dn468199(v=vs.108).aspx), specifying a default dependency on the `ApplicationDbContext`. The UserManager's base class implementation provides the majority of the functionality around managing users and security roles for your application, providing Business Logic Layer functionality.

The other classes in the IdentityModel.cs file are helper classes whose purpose is to help integrate the Identity classes with OWIN and the HTTP pipeline.
