(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{475:function(e,t,r){"use strict";r.r(t);var o=r(22),a=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"website-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#website-security","aria-hidden":"true"}},[e._v("#")]),e._v(" Website Security")]),e._v(" "),r("p",[e._v("Website security is a multi-layered topic that touches on network security, security in the web server and database servers, and (of course) security in the web application itself. Core to the workings of security are the ideas of "),r("strong",[e._v("authentication")]),e._v(" (are you who you claim to be?) and "),r("strong",[e._v("authorization")]),e._v(" (given who you are, what do you have access to?).")]),e._v(" "),r("p",[r("strong",[e._v("Authentication")]),e._v(" can be performed by the web application itself (through usernames and passwords managed by your own application) or by a third party using their accepted credentials (such as your Google, Facebook, Yahoo, or GitHub account). This kind of authentication is known as "),r("strong",[e._v("Individual User Accounts")]),e._v(" and is configured as forms authentication in your site's web.config file. An alternate type of configuration for authentication is known as windows authentication; this approach is typically for Intranet sites that use some form of Active Directory or other organization-based authentication.")]),e._v(" "),r("p",[e._v("After getting authenticated, your users right to access resources or perform tasks on your site can be restricted through security roles that the users can belong to. Allowing or denying access to pages and functionality on your site is known as "),r("strong",[e._v("Authorization")]),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"a-brief-history-of-security-frameworks-in-asp-net"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-history-of-security-frameworks-in-asp-net","aria-hidden":"true"}},[e._v("#")]),e._v(" A Brief History of Security Frameworks in ASP.NET")]),e._v(" "),r("p",[e._v("Back in 2005, Microsoft came out with the "),r("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/yh26yfzy(v=VS.100).aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Membership"),r("OutboundLink")],1),e._v(" framework as an easy-to-use and reliable security framework that works with Forms Authentication and uses an SQL Server database to store the user credentials (user names, passwords) along with user profile data. This worked well for a number of years, but a number of factors prompted Microsoft to rewrite their approach to security for their developers, such as")]),e._v(" "),r("ul",[r("li",[e._v("the advent of social login systems (using your Google or Facebook account to log into non-Google/non-Facebook websites)")]),e._v(" "),r("li",[e._v("the increased desire of developers to use alternative databases, such as Oracle or MySQL")]),e._v(" "),r("li",[e._v("Microsoft's desire to promote their cloud-based solutions with Azure")]),e._v(" "),r("li",[e._v("the desire to promote a more unified approach to security that would work for MVC as well as the traditional Web Forms applications and in conjuncture with Microsoft's Entity Framework")]),e._v(" "),r("li",[e._v("the advent of responsive frameworks such as Web API, SignalR, and other technological advances")]),e._v(" "),r("li",[e._v("the simple need to beef up the Membership framework's security in the wake of advancing technology (see this article)")])]),e._v(" "),r("p",[e._v("The first re-write was the "),r("a",{attrs:{href:"http://www.asp.net/web-pages/tutorials/security/16-adding-security-and-membership",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Simple Membership"),r("OutboundLink")],1),e._v(" framework that whipped with WebMatrix and Visual Studio 2010 SP1. This was a simple re-write that was presented as a light-weight alternative to the Membership Framework that still allowed the creation of custom user profiles. Soon after, they released the "),r("a",{attrs:{href:"http://www.hanselman.com/blog/IntroducingSystemWebProvidersASPNETUniversalProvidersForSessionMembershipRolesAndUserProfileOnSQLCompactAndSQLAzure.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Universal Providers"),r("OutboundLink")],1),e._v(" that was designed to work with additional databases, such as the cloud-based Azure SQL Database and the low-end SQL Server Compact (both Microsoft products). The Universal Providers worked with the Entity Framework, which was an advantage for some but a liability for others (generally, it's not a good idea in maintaining existing systems to just scrap or redesign your entire DAL and Entity/CBO framework simply to accomodate a vendor-supplied security framework). When the Universal Providers was introduced, Microsoft did a major clean-up of the code and database tables that simplified a lot of the complexity of the Membership framework.")]),e._v(" "),r("p",[e._v("This rapid-fire set of modifications to the Membership framework eilicited a lot of feedback for Microsoft, and in order to support social logins and separate the security framework from the ASP.NET pipeline, they introduced "),r("a",{attrs:{href:"http://www.asp.net/identity",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Identity"),r("OutboundLink")],1),e._v(". At the time of this writing, the current version of ASP.NET Identiy is 2.1.0. It's a definite improvement on previous incarnations of security frameworks by Microsoft, but it's not without its detractors (see "),r("a",{attrs:{href:"http://brockallen.com/2013/10/20/the-good-the-bad-and-the-ugly-of-asp-net-identity/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The good, the bad and the ugly of ASP.NET Identity"),r("OutboundLink")],1),e._v("). As Brock Allen has stated (and numerous developers have affirmed), Programming is hard. Security is harder.")]),e._v(" "),r("p",[e._v("At present, ASP.NET Identity is still a good starting place for integrating security into your web application. Certainly, the whole arena of security is one that new developers shouldn't try to implement all on their own - it takes a tremendous amount of in-depth knowledge and years of experience to develop security frameworks.")]),e._v(" "),r("p",[e._v("For additional inforamtion on the background of ASP.NET Identity, read the "),r("a",{attrs:{href:"http://www.asp.net/identity/overview/getting-started/introduction-to-aspnet-identity",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to ASP.NET Identity"),r("OutboundLink")],1),e._v(" and ASP.NET MVC and Identity 2.0: Understanding the Basics.")]),e._v(" "),r("h2",{attrs:{id:"helpful-terms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#helpful-terms","aria-hidden":"true"}},[e._v("#")]),e._v(" Helpful Terms")]),e._v(" "),r("p",[e._v("Authentication\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("Authorization\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("Credentials\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("User Profile\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("Hashing and Salting\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("User\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("Role\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("p",[e._v("Social Logins\n~ "),r("em",[e._v("TBA")])]),e._v(" "),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("p",[e._v("There are a lot of articles about implementing security in ASP.Net. Here are a few good ones to skim in order to get a better understanding of ASP.NET Identity and Owin. Note that while")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://odetocode.com/blogs/scott/archive/2013/11/25/asp-net-core-identity.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Core Identity"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://odetocode.com/blogs/scott/archive/2014/01/09/customization-options-with-asp-net-identity.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customization Options With ASP.NET Identity"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"http://odetocode.com/blogs/scott/archive/2014/01/03/asp-net-identity-with-the-entity-framework.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ASP.NET Identity with the Entity Framework"),r("OutboundLink")],1)])])])},[],!1,null,null,null);t.default=a.exports}}]);