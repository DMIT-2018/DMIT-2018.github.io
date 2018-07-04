---
title: MessageUserControl
---
# Handling Exceptions and User Feedback in your ASP.Net Pages

This article will walk you through the steps to create a re-usable User Control to give feedback to users about errors and successes while working with your forms. The styling and structure of the user control persented here leverages various features of Bootstrap. The general storyline of these code samples follows the eRestaurant web site, but can be easily adapted for similar environments and scenarios.

## The General Approach

At the heart of the idea behind this approach is the commonality of needing to process user requests within the context of try/catch blocks. What is needed is a way to separate the unique processing activities of the various buttons and forms from the common (and repetitive) try/catch aspect of error handling. This approach will employ a UserControl.

The concept of a User Control is to create an "item" using the asp.net web controls as it's building blocks. User Controls are built with the idea that they are reusable. A user control can replace the need of the developer to repeatedly code some common web page functionality over and over again. Once the control is create with any necessary code behind, it can be used on any web page.

This user control will use a delegate as a callback for the unique processing for dealing with the try/catch aspect of error handling. This delegate can be passed to a central function on the user control and invoked as-needed within the try/catch block. The user control can then focus entirely on the presentation of feedback to the user on actions that the user wants to perform. The delegate will be include in the code-behind of the user control. Note that it is not part of the user control but rather include in the namespace containing the user control.

## Creating a User Control

Create a folder on the root of your website called UserControls. Right-click on the folder and add a new item - a User Control named MessageUserControl.ascx (note the file extension is .ascx, signifying a user control in C#). Edit the contents of the user control to match the following markup.

```xml
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="MessageUserControl.ascx.cs" Inherits="DMIT2018Common.UserControls.MessageUserControl" %>
<asp:Panel ID="MessagePanel" runat="server">
    <div class="panel-heading">
        <asp:Label ID="MessageTitleIcon" runat="server"> </asp:Label>
        <asp:Label ID="MessageTitle" runat="server" />
    </div>
    <div class="panel-body">
        <asp:Label ID="MessageLabel" runat="server" />
        <asp:Repeater ID="MessageDetailsRepeater" runat="server" EnableViewState="false">
            <headertemplate>
                <ul>
            </headertemplate>
            <footertemplate>
                </ul>
            </footertemplate>
            <itemtemplate>
                <li><%# Eval("Error") %></li>
            </itemtemplate>
        </asp:Repeater>
    </div>
</asp:Panel>
```

## Writing the Code-Behind of the User Control

A number of the methods in the code-behind are very simple. Take some time to examine the code to see how the methods "flow" from one to the other as a "chain" of processes with different starting points. You might want to consider drawing out the "call hierarchy" that exists between these methods.

The user control has been placed in its own namespace. The delegate (above) is part of this namespace but not in the actual user control class.

The code-behind of the user control consists of four regions:

- A region for string constants (used as part of the standard user feedback text and styles).
- A region for event handlers on the control (in this case, just the `Page_Load()` event).
- A set of public methods that can be called by the code-behind of the form on which this user control is placed.
- A set of private methods that do the "heavy lifting" or detailed processing of error handling and user feedback.

In order to simplify the usage of this control, a number of the methods are overloaded, thus limiting the public API of the form to the following key methods.

ShowInfo()
  ~ Displays a message in the message panel.

TryRun()
  ~ Processes a request through a callback delegate within a try/catch block.

HandleDataBoundException
  ~ Checks for an exception from an ObjectDataSource event and handles it by showing the details of the exception.

```csharp
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DMIT2018Common.UserControls
{
    public delegate void ProcessRequest();

    public partial class MessageUserControl : System.Web.UI.UserControl
    {
        #region String Constants
        private const string STR_TITLE_GeneralErrors = "Processing Error";
        private const string STR_TEXT_GeneralErrors = "Unable to process your submission due to the following reason(s).";
        private const string STR_TITLE_ValidationErrors = "Validation Errors";
        private const string STR_TEXT_ValidationErrors = "Validation errors encountered with your submission.";
        private const string STR_TITLE_UsageInstructions = "Usage Instructions";
        private const string STR_TITLE_ICON_warning = "glyphicon glyphicon-warning-sign";
        private const string STR_PANEL_danger = "panel panel-danger";
        private const string STR_TITLE_ICON_info = "glyphicon glyphicon-info-sign";
        private const string STR_PANEL_info = "panel panel-info";
        private const string STR_TITLE_ICON_success = "glyphicon glyphicon-ok-sign";
        private const string STR_PANEL_success = "panel panel-success";
        #endregion
        #region Event Handlers
        protected void Page_Load(object sender, EventArgs e)
        {
            MessagePanel.Visible = false;
        }
        #endregion
        #region Public methods - show messages and process requests within try/catch
        /// <summary>
        /// Displays a message in the message panel with a general title of "Usage Instructions"
        /// </summary>
        /// <param name="message">Text to display as the message</param>
        public void ShowInfo(string message)
        {
            ShowInfo(STR_TITLE_UsageInstructions, message);
        }
        /// <summary>
        /// Displays a message and title in the message panel with a general "info" display
        /// </summary>
        /// <param name="title">Title for the panel</param>
        /// <param name="message">Text to display as the message</param>
        public void ShowInfo(string title, string message)
        {
            ShowInfo(message, title, STR_TITLE_ICON_info, STR_PANEL_info);
        }
        /// <summary>
        /// Processes a request through a callback delegate within a try/catch block. Distinguished Entity Framework exceptions from general exceptions.
        /// </summary>
        /// <param name="callback">A delegate method to call within the try block</param>
        public void TryRun(ProcessRequest callback)
        {
            TryCatch(callback);
        }
        /// <summary>
        /// Processes a request through a callback delegate within a try/catch block. Distinguished Entity Framework exceptions from general exceptions.
        /// </summary>
        /// <param name="callback">A delegate method to call within the try block</param>
        /// <param name="title">Title for the panel</param>
        /// <param name="successMessage">Text to display as the message if the callback processes without an exception</param>
        public void TryRun(ProcessRequest callback, string title, string successMessage)
        {
            if (TryCatch(callback))
                ShowInfo(successMessage, title, STR_TITLE_ICON_success, STR_PANEL_success);
        }
        /// <summary>
        /// Checks for an exception from an ObjectDataSource event and handles it by showing the details of the exception.
        /// Checks for an exception raised by a BusinessRuleException object (TargetInvocatonException), the InnerException
        /// in extracted and reassigned as the incoming exception otherwise the incoming remains as it was coming in.
        /// After handling the exception, the handling flag for the exception is set to true (handled).
        /// </summary>
        /// <param name="e">An event argument with details on the exception, if any</param>
        public void HandleDataBoundException(ObjectDataSourceStatusEventArgs e)
        {
            var ex = e.Exception;
            if (ex is TargetInvocationException)
                ex = ex.InnerException;
            if (ex is DbEntityValidationException)
            {
                HandleException(e.Exception as DbEntityValidationException);
                e.ExceptionHandled = true;
            }
             else if (ex is BusinessRuleException)
            {
                HandleException(ex as BusinessRuleException);
                e.ExceptionHandled = true;
            }
            else if (ex is Exception)
            {
                HandleException(ex as Exception);
                e.ExceptionHandled = true;
            }
        }
        #endregion
        #region Private methods - process details of messaging
        /// <summary>
        /// Processes a request through a callback delegate within a try/catch block. Distinguished Entity Framework exceptions from general exceptions.
        /// </summary>
        /// <param name="callback">A delegate method to call within the try block</param>
        /// <returns>True if the callback was successful (did not generate an exception); false otherwise</returns>
        private bool TryCatch(ProcessRequest callback)
        {
            try
            {
                callback();
                return true;
            }
            catch (BusinessRuleException ex)
            {
                HandleException(ex);
            }
            catch (DbEntityValidationException ex)
            {
                HandleException(ex);
            }
            catch (Exception ex)
            {
                HandleException(ex);
            }
            return false;
        }
        /// <summary>
        /// Handles a BusinessRuleException by displaying the details and general error.
        /// <summary>
        /// <param name="ex">An exception object generated from Entity Framework</param>
        private void HandleException(BusinessRuleException ex)
        {
            var details = from detail in ex.RuleDetails
                          select new
                          {
                              Error = detail
                          };
            ShowExceptions(details, ex.Message, STR_TITLE_ValidationErrors, STR_TITLE_ICON_warning, STR_PANEL_danger);
        }
        /// <summary>
        /// Handles a DbEntityValidationException by getting the details of each validation error and showing it as a Validation Exception.
        /// </summary>
        /// <param name="ex">An exception object generated from Entity Framework</param>
        private void HandleException(DbEntityValidationException ex)
        {
            var details = from DbValidationError error in ex.EntityValidationErrors.First().ValidationErrors
                          select new
                          {
                              Error = error.ErrorMessage
                          };
            ShowExceptions(details, STR_TEXT_ValidationErrors, STR_TITLE_ValidationErrors, STR_TITLE_ICON_warning, STR_PANEL_danger);
        }
        /// <summary>
        /// Handles an Exception by getting the root of the error and showing it as a General Exception.
        /// </summary>
        /// <param name="ex">A general Exception object</param>
        private void HandleException(Exception ex)
        {
            Exception root = ex;
            while (root.InnerException != null)
                root = root.InnerException;
            if (root is DbEntityValidationException)
                HandleException(root as DbEntityValidationException);
            else
            {
                dynamic[] details = new dynamic[] { new { Error = root.Message } };
                ShowExceptions(details, STR_TEXT_GeneralErrors, STR_TITLE_GeneralErrors, STR_TITLE_ICON_warning, STR_PANEL_danger);
            }
        }
        /// <summary>
        /// Binds error details to the repeater and displays the message panel.
        /// </summary>
        /// <param name="details">Details of the exception or message</param>
        /// <param name="messageText">Text to display as the message</param>
        /// <param name="messageTitle">Title for the panel</param>
        /// <param name="titleIcon">Icon to show in the panel title</param>
        /// <param name="panelClass">CSS Class to apply to the panel</param>
        private void ShowExceptions(object details, string messageText, string messageTitle, string titleIcon, string panelClass)
        {
            MessageDetailsRepeater.DataSource = details;
            MessageDetailsRepeater.DataBind();
            ShowInfo(messageText, messageTitle, titleIcon, panelClass);
        }
        /// <summary>
        /// Displays the message panel.
        /// </summary>
        /// <param name="messageText">Text to display as the message</param>
        /// <param name="messageTitle">Title for the panel</param>
        /// <param name="titleIcon">Icon to show in the panel title</param>
        /// <param name="panelClass">CSS Class to apply to the panel</param>
        private void ShowInfo(string messageText, string messageTitle, string titleIcon, string panelClass)
        {
            MessageLabel.Text = messageText;
            MessageTitle.Text = messageTitle;
            MessageTitleIcon.CssClass = titleIcon;
            MessagePanel.CssClass = panelClass;
            MessagePanel.Visible = true;
        }
        #endregion
    }
}
```

## Embedding the User Control on Your Form

Leveraging the MessageUserControl on your form is easy. Simply drag & drop the control onto your form, and Visual Studio will create the markup for the `<%@ Register … %>` directive and the user control itself. The following code-example shows an edited version of this markup where the `TagPrefix` has been changed from uc1 to my.

```xml
<%@ Register Src="~/UserControls/MessageUserControl.ascx" TagPrefix="my" TagName="MessageUserControl" %>
...
<my:MessageUserControl runat="server" ID="MessageUserControl" />
```

After the control has been placed on your form, you simply need to set up a method **(a void method with no parameters)** that matches the pattern for the `ProcessRequest` delegate, and then call that method from within your button click event, as seen in this following example of a button-click that performs a lookup. The .ShowInfo() method can be used to display a message to the screen. The .TryRun() method is using the delegate to execute the program method GetYourDataInfo().

```csharp
    protected void AWebDropDownList_Click(object sender, EventArgs e)
    {
        if (AWebDropDownList.SelectedIndex == 0)
            MessageUserControl.ShowInfo("Please select a .......");
        else
            MessageUserControl.TryRun((ProcessRequest)GetYourDataInfo);
    }
    public void GetYOurDataInfo()
    {
        //this is where your method logic would go
        SomeController sysmgr = new SomeController();
        YourData dataInfo = sysmgr.Get_SomeData(int.Parse(AWebDropDownList.SelectedValue));
        aField.Text = dataInfo.SomeProperty;
        .....
    }
```

An alternative way of coding the example is to include the method code within the TryRun(). You have the additional capability to assign a title and success message to the TryRun(). The above example could also have use the title and success message.

```csharp
    protected void AWebDropDownList_Click(object sender, EventArgs e)
    {
        if (AWebDropDownList.SelectedIndex == 0)
            MessageUserControl.ShowInfo("Please select a ........");
        else
            MessageUserControl.TryRun(() =>
                {
                    //this is where your method logic would go
                    SomeController sysmgr = new SomeController();
                    YourData dataInfo = sysmgr.Get_SomeData(int.Parse(AWebDropDownList.SelectedValue));
                    aField.Text = dataInfo.SomeProperty;
                    .....
                },"Success","Data Found");
```

To use this control with an ObjectDataSource control, simply ensure your ObjectDataSource control calls an event handler for the Inserted, Updated and Deleted events. Make sure you've dragged the MessageUserControl.ascx onto your form as well.

```xml
<asp:ObjectDataSource runat="server" ID="SpecialEventDataSource" DataObjectTypeName="eRestaurant.Entities.SpecialEvent" DeleteMethod="DeleteSpecialEvent" InsertMethod="AddSpecialEvent" OldValuesParameterFormatString="original_{0}" SelectMethod="ListAllSpecialEvents" TypeName="eRestaurant.BLL.RestaurantAdminController" UpdateMethod="UpdateSpecialEvent" OnDeleted="CheckForException" OnInserted="CheckForException" OnSelected="CheckForException" OnUpdated="CheckForException"></asp:ObjectDataSource>
```

Then, in your code-behind of your page, you can pass the `ObjectDataSourceStatusEventArgs` to the user control.

```csharp
    protected void CheckForException(object sender, ObjectDataSourceStatusEventArgs e)
    {
        MessageUserControl.HandleDataBoundException(e);
    }
```

## Using the Message UserControl from your BLL classes

This user control can handle errors that arise in your BLL controller classes when doing logic validation. A class called the BusingessRuleException has been created to transport your list of errors along with a general message to the user control. This class can go anywhere in your application library, however, for ease of maintenance, place it at the root of your application library.

```csharp
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Web;

        namespace DMIT2018Common.UserControls
        {
            [Serializable]
            public class BusinessRuleException : Exception
            {
                public List<string> RuleDetails { get; set; }
                public BusinessRuleException(string message, List<string> reasons)
                    : base(message)
                {
                    this.RuleDetails = reasons;
                }
            }
        }
```

To implement this class, a) create a List to hold the error message strings, b) any error message you wish to create can be added to the List and c) at some point throw the BusinessRuleException.

```csharp
    public void SomeControllerMethod(SomeClass item)
    {
        using(var context = new DALCLassContext())
        {
            List reasons = new List;
            ... some code ...
            if (string.IsNullOrEmpty(item.SomeField))
            {
                reasons.Add("your custom error message");
            }
            else if (item.SomeField.Equals("some value")
            {
                reasons.Add("your custom error message");
            }
            ...... more code  ....
            if (reasons.Count() > 0)
            {
                throw new BusinessRuleException("general error message", reasons);
            }
            else
            {
                ... more code ....
            }
        }
    }
```
