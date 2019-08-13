---
title: LOGs
---
# Learning Outcome Guides (*LOGs*)

> ***At the end of each topic, you should be able to** do the items listed for the topic.*

## Course Introduction

- List the evaluation components for this course and their relative weight

## DVCS - Git Basics

- Define the terms CVCS and DVCS
- List two examples of a Distributed Version Control System
- Create a new repository through the browser on GitHub.com
- Install and configure GitKraken to use with GitHub.com
- Identify the main parts of the GitKraken program
- Create a new repository through GitKraken
- List and describe key git commands that can be used on the command line
- Describe the purpose of a .gitignore file
- Describe the purpose of a .gitattributes file
- Add files for tracking in git through the git shell
- Commit files in git through the git shell
- Distinguish between a remote repository and a local repository
- Synchronize a local repository with a remote repository
- Define the terms Clone and Fork as they apply to git and GitHub
- Define the terms Orgin and Upstream as they apply to cloned/forked repositories

## Project Setup

- Use a git repository to manage a Visual Studio solution
- Set up a Visual Studio (VS) solution with an ASP.NET Web Application Project that uses Web Forms with Individual Accounts for authorization
- Add multiple projects to an existing Visual Studio solution
- Identify and Set the startup project for a multi-project solution
- Explain the purpose of the `.vs`folder and the `.sln` file
- Edit a `.sln` file to ensure the main project will load as the startup program in your Visual Studio solution
- Add project references between projects in a solution
- Manage NuGet package references for both projects and solutions

## Entity Framework (EF6)

- Knowledge
  - Entities
    - Define the terms Entity, CBO, DTO, and POCO
    - Describe what is meant by 'Code First' development in EF
    - Describe the role of attributes on Entity classes and their properties
    - Identitfy the purpose and usage of the following attributes: `[Table]`, `[Key]`, `[ForeignKey]`, `[Column]`, `[Required]`, `[DatabaseGenerated]`, `[NotMapped]`, `[Index]`, `[Range]`, `[StringLength]`, `[MaxLength]`
    - Distinguish between validation attributes and attributes that describe table/column characteristics
    - Describe what is meant by a "navigation property" in Entity Framework
    - Define the term "Object Graph" and how it relates to an Entity model that uses navigation properties
  - DAL Class
    - Describe the role of a DbContext class in EF
    - Describe how to customize the database model of your `DbContext` class by overrideing the `OnModelCreating()` method
- Skill
  - Entities
    - Create Entity classes for use with Entity Framework (EF)
    - Create entity classes that represent/model the structure of database tables, using appropriate attributes and navigation properties
  - DAL Class
    - Create a class that inherits from DbContext to provide access to tables in a database
    - Create `DbSet<>` properties for a database context class to complete the modeling of database tables
    - Specify a connection string name to be used by a DbContext class through a parameter-less constructor
    - Use Entity Framework Code First as a means of generating a database from a set of Entity classes
    - Disable automatic database initialization for an EF DbContext class by editing the web.config
    - Generate a database context and entity classes from an existing database
  - BLL
    - Query a database using LINQ and Entity Framework
    - Add, Remove and Update information in a database using Entity Framework

## Databound Web-Form Controls

- Identify and distinguish between five common ASP.NET databound controls
- Describe how to programmatically populate DropDownList, GridView, DetailsView, ListView, and Repeater controls
- Describe how to use an ObjectDataSource control to populate DropDownList, GridView, DetailsView, ListView, and Repeater controls
- Display data using the DropDownList, GridView, DetailsView, ListView, and Repeater controls
- Display an object graph data using nested databound controls
- Customize the display of the ListView, GridView and Repeater controls
- Programmatically access the contents of a ListView and GridView to perform "bulk" updating

## Introduction to LINQ

- C# Language Concepts
    - Define the acronym LINQ
    - Define the term "Object Graph"
    - Describe what an Anonymous Type is in C#
    - Define the term Delegate
    - Identify the Lambda Operator in C#
    - Describe what an Anonymous Method is in C#
    - Identify the purpose of extension methods in C#
    - Create simple extension methods in C#
- LINQ
    - Distinguish between Query Syntax and Method Syntax in LINQ
    - Describe five common clauses in LINQ Query Syntax
    - Use LinqPad to perform LINQ queries against a database
    - Perform simple LINQ queries using from, where, select, group, and orderby clauses
    - Perform nested LINQ queries to create object graphs
    - Perform LINQ queries using dates
    - List five commonly used extension methods for performing aggregation in LINQ
    - Convert LINQ results to generic lists and enumerable collections
    - Convert lists and enumerable collections to IQueryable collections
    - Use selection filter methods in LINQ
    - Perform collection tests using .Any() and .All() extension methods
    - Perform a union of two collections in C#

## CQRS

- Define the term CQRS
- Identify the benefits of CQRS in application design
- Define the terms POCO and DTO
- Explain the usage of POCOs and DTOs with CQRS

## Transactional Processing in Entity Framework

- Describe how transactions are performed using Entity Framework
- Process simple combinations of inserts, updates and deletes as a single transaction in Entity Framework
- Process complex combinations of inserts, updates and deletes as a single transaction in Entity Framework

## UX Design and Business Requirements

- List four primary considerations in design
  - Contrast, Repetition, Alignment, and Proximity
- Describe the design principles of Contrast, Repetition, Alignment, and Proximity
- Identify several characteristics of good UX design regarding data entry
- Analyze business requirements to identify detailed user input requirements
- Compare and contrast user input requirements and data storage requirements
- Design user interfaces around business requirements
- Identify specific data entry details given a set of general buisness requirements and an ERD
- Create implementation plans for business requirements related to data entry and storage
- Develop functional UX designs to meet business requirements
- Identify common business requirements for workflows in areas such as HR, Sales, Purchasing, and Inventory Control

## Implementing Security in a Web Application

- Distinguish between authentication and authorization as it relates to securing an application
- List the main characteristics of Forms Authentication, Windows Authentication, and OAuth
- Describe what is meant by third-party authentication
- Identify common third-party authentication sources
- Explain the benefits of using third-party authentication
- Explain why authorization is always an application-specific concern
- Implement user-account based security in an ASP.Net application
