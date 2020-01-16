(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{491:function(e,t,n){"use strict";n.r(t);var i=n(2),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"asp-net-identity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#asp-net-identity"}},[e._v("#")]),e._v(" ASP.NET Identity")]),e._v(" "),n("p",[e._v("ASP.NET Identity is available through two NuGet packages.")]),e._v(" "),n("p",[e._v("Microsoft ASP.NET Identity Core\n~ This contains the core interfaces for ASP.NET Identity, with minimal implementations. This package has no dependencies.")]),e._v(" "),n("p",[e._v("Microsoft ASP.NET Identity EntityFramework\n~ This package provides an implementation of ASP.NET Identity that uses the Entity Framework. As such, this package has dependencies on both the Microsoft ASP.NET Identity Core and the Entity Framework.")]),e._v(" "),n("h2",{attrs:{id:"identity-and-owin-in-vs2013-web-site-template"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#identity-and-owin-in-vs2013-web-site-template"}},[e._v("#")]),e._v(" Identity and Owin in VS2013 Web Site Template")]),e._v(" "),n("p",[e._v("ASP.NET Identity EntityFramework and OWIN are included as part of the default template for an ASP.NET Web Forms web site in Visual Studio 2013. The core aspects of Identity are in the "),n("code",[e._v("~/App_Code/IdentityModel.cs")]),e._v(" but are also referenced in the pages under the "),n("code",[e._v("~/Account/")]),e._v(" folder. The classes in IdentityModel.cs that build on ASP.NET Identity are:")]),e._v(" "),n("p",[e._v("ApplicationUser\n~ This is an entity class that represents a user in the system. It inherits from "),n("code",[e._v("IdentityUser")]),e._v(" which provides the core implementation of the "),n("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/microsoft.aspnet.identity.iuser(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("IUser"),n("OutboundLink")],1),e._v(" interface in the Identity Core.")]),e._v(" "),n("p",[e._v("ApplicationDbContext\n~ This class acts as the database context class (DAL) and inherits from "),n("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/dn468176(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("IdentityDbContext"),n("ApplicationUser",[n("OutboundLink")],1)],1),e._v(". This class has a default constructor which specifies the connection string name to use (DefaultConnection) in the web.config file.")]),e._v(" "),n("p",[e._v("UserManager\n~ The UserManager class inherits from "),n("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/dn468199(v=vs.108).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("UserManager"),n("ApplilcationUser",[n("OutboundLink")],1)],1),e._v(", specifying a default dependency on the "),n("code",[e._v("ApplicationDbContext")]),e._v(". The UserManager's base class implementation provides the majority of the functionality around managing users and security roles for your application, providing Business Logic Layer functionality.")]),e._v(" "),n("p",[e._v("The other classes in the IdentityModel.cs file are helper classes whose purpose is to help integrate the Identity classes with OWIN and the HTTP pipeline.")])])}),[],!1,null,null,null);t.default=s.exports}}]);