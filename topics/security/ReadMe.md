---
title: Website Security
---
# Website Security

Website security is a multi-layered topic that touches on network security, security in the web server and database servers, and (of course) security in the web application itself. Core to the workings of security are the ideas of **authentication** (are you who you claim to be?) and **authorization** (given who you are, what do you have access to?).

**Authentication** can be performed by the web application itself (through usernames and passwords managed by your own application) or by a third party using their accepted credentials (such as your Google, Facebook, Yahoo, or GitHub account). This kind of authentication is known as **Individual User Accounts** and is configured as forms authentication in your site's web.config file. An alternate type of configuration for authentication is known as windows authentication; this approach is typically for Intranet sites that use some form of Active Directory or other organization-based authentication.

After getting authenticated, your users right to access resources or perform tasks on your site can be restricted through security roles that the users can belong to. Allowing or denying access to pages and functionality on your site is known as **Authorization**.

## A Brief History of Security Frameworks in ASP.NET

Back in 2005, Microsoft came out with the [ASP.NET Membership](http://msdn.microsoft.com/en-us/library/yh26yfzy(v=VS.100).aspx) framework as an easy-to-use and reliable security framework that works with Forms Authentication and uses an SQL Server database to store the user credentials (user names, passwords) along with user profile data. This worked well for a number of years, but a number of factors prompted Microsoft to rewrite their approach to security for their developers, such as

- the advent of social login systems (using your Google or Facebook account to log into non-Google/non-Facebook websites)
- the increased desire of developers to use alternative databases, such as Oracle or MySQL
- Microsoft's desire to promote their cloud-based solutions with Azure
- the desire to promote a more unified approach to security that would work for MVC as well as the traditional Web Forms applications and in conjuncture with Microsoft's Entity Framework
- the advent of responsive frameworks such as Web API, SignalR, and other technological advances
- the simple need to beef up the Membership framework's security in the wake of advancing technology (see this article)

The first re-write was the [ASP.NET Simple Membership](http://www.asp.net/web-pages/tutorials/security/16-adding-security-and-membership) framework that whipped with WebMatrix and Visual Studio 2010 SP1. This was a simple re-write that was presented as a light-weight alternative to the Membership Framework that still allowed the creation of custom user profiles. Soon after, they released the [ASP.NET Universal Providers](http://www.hanselman.com/blog/IntroducingSystemWebProvidersASPNETUniversalProvidersForSessionMembershipRolesAndUserProfileOnSQLCompactAndSQLAzure.aspx) that was designed to work with additional databases, such as the cloud-based Azure SQL Database and the low-end SQL Server Compact (both Microsoft products). The Universal Providers worked with the Entity Framework, which was an advantage for some but a liability for others (generally, it's not a good idea in maintaining existing systems to just scrap or redesign your entire DAL and Entity/CBO framework simply to accomodate a vendor-supplied security framework). When the Universal Providers was introduced, Microsoft did a major clean-up of the code and database tables that simplified a lot of the complexity of the Membership framework.

This rapid-fire set of modifications to the Membership framework eilicited a lot of feedback for Microsoft, and in order to support social logins and separate the security framework from the ASP.NET pipeline, they introduced [ASP.NET Identity](http://www.asp.net/identity). At the time of this writing, the current version of ASP.NET Identiy is 2.1.0. It's a definite improvement on previous incarnations of security frameworks by Microsoft, but it's not without its detractors (see [The good, the bad and the ugly of ASP.NET Identity](http://brockallen.com/2013/10/20/the-good-the-bad-and-the-ugly-of-asp-net-identity/)). As Brock Allen has stated (and numerous developers have affirmed), Programming is hard. Security is harder.

At present, ASP.NET Identity is still a good starting place for integrating security into your web application. Certainly, the whole arena of security is one that new developers shouldn't try to implement all on their own - it takes a tremendous amount of in-depth knowledge and years of experience to develop security frameworks.

For additional inforamtion on the background of ASP.NET Identity, read the [Introduction to ASP.NET Identity](http://www.asp.net/identity/overview/getting-started/introduction-to-aspnet-identity) and ASP.NET MVC and Identity 2.0: Understanding the Basics.

## Helpful Terms

Authentication
  ~ *TBA*

Authorization
  ~ *TBA*

Credentials
  ~ *TBA*

User Profile
  ~ *TBA*

Hashing and Salting
  ~ *TBA*

User
  ~ *TBA*

Role
  ~ *TBA*

Social Logins
  ~ *TBA*

## Further Reading

There are a lot of articles about implementing security in ASP.Net. Here are a few good ones to skim in order to get a better understanding of ASP.NET Identity and Owin. Note that while

- [ASP.NET Core Identity](http://odetocode.com/blogs/scott/archive/2013/11/25/asp-net-core-identity.aspx)
- [Customization Options With ASP.NET Identity](http://odetocode.com/blogs/scott/archive/2014/01/09/customization-options-with-asp-net-identity.aspx)
- [ASP.NET Identity with the Entity Framework](http://odetocode.com/blogs/scott/archive/2014/01/03/asp-net-identity-with-the-entity-framework.aspx)
