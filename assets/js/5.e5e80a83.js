(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(e,t,a){e.exports=a.p+"assets/img/UserProfile.485eab59.png"},169:function(e,t,a){e.exports=a.p+"assets/img/LoginPage.924df4b9.png"},363:function(e,t,a){"use strict";a.r(t);var i=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"intro-to-ux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intro-to-ux","aria-hidden":"true"}},[e._v("#")]),e._v(" Intro to UX")]),e._v(" "),i("p",[e._v("UX (or "),i("em",[e._v("U")]),e._v("ser e"),i("em",[e._v("X")]),e._v("perience) is fundamentally about giving the user a pleasant experience when interacting with your application. Often times, this means emphasizing the usability of your site, particularly where it includes interactive or functional components. It also includes addressing other issues such as simplifying navigation, creating an intuitive user interface, and effectively meeting the users' needs and expectations. One thing is for certain - at the center of UX is the "),i("em",[e._v("user")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"ux-data-driven-applications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ux-data-driven-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" UX Data-Driven Applications")]),e._v(" "),i("p",[e._v("A data-driven application is simply a program that is supported by a database for back-end storage of information. Storing and retrieving information in a database is all about CRUD - making sure that way we handle information in storage will ensure the general integrity of the data (i.e.: that regular maintenance of the data will not inadvertantly corrupt it). But how information is "),i("em",[e._v("packaged")]),e._v(" for storage (i.e. - normalized into related tables) is entirely different from how it is "),i("em",[e._v("unpacked")]),e._v(", "),i("em",[e._v("used")]),e._v(" and "),i("em",[e._v("moved")]),e._v(" around in the application (i.e. - DTOs, POCOs, etc.).")]),e._v(" "),i("p",[e._v("In building data-driven applications, it's important to consider how the data is going to be "),i("em",[e._v("displayed to")]),e._v(" and "),i("em",[e._v("used by")]),e._v(" the end-user. Remember, the database is designed to work well for data "),i("strong",[e._v("storage")]),e._v(", not presentation. It's not unusual for the "),i("em",[e._v("shape")]),e._v(" or structure of the data to appear differently in a user interface than how it is structured for data storage.")]),e._v(" "),i("h2",{attrs:{id:"designing-data-driven-applications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#designing-data-driven-applications","aria-hidden":"true"}},[e._v("#")]),e._v(" Designing Data-Driven Applications")]),e._v(" "),i("p",[e._v("When it comes to "),i("em",[e._v("designing")]),e._v(" the parts of an application that allow users to work with their data-centric needs, you want to create something that is "),i("strong",[e._v("focused")]),e._v(" or "),i("strong",[e._v("targetted")]),e._v(" on the task that they want to accomplish while keeping the interactions "),i("strong",[e._v("succinct")]),e._v(" and "),i("strong",[e._v("informative")]),e._v(".")]),e._v(" "),i("p",[e._v("How do we accomplish this? What steps should we follow to make this happen? If you are designing within the constraints of an established state-based database as the backing store, let me suggest the following steps:")]),e._v(" "),i("ol",[i("li",[e._v("Clarify the requirements by "),i("strong",[e._v("listing")]),e._v(" out the "),i("strong",[e._v("explicitly mentioned data items")]),e._v(" in the problem statement.")]),e._v(" "),i("li",[i("strong",[e._v("Compare")]),e._v(" the problem statement's data items "),i("strong",[e._v("to the stored data structure")]),e._v(" as identified by the ERD.")]),e._v(" "),i("li",[i("strong",[e._v("Distinguish")]),e._v(" between data that has to be "),i("em",[i("strong",[e._v("presented to")])]),e._v(" the user "),i("strong",[e._v("versus")]),e._v(" that which has to be "),i("em",[i("strong",[e._v("entered by")])]),e._v(" the user.")]),e._v(" "),i("li",[i("strong",[e._v("Design")]),e._v(" a user interface ("),i("strong",[e._v("user interactions")]),e._v(") that will facilitate presenting and gathering data.")]),e._v(" "),i("li",[e._v("Generate DTO/POCO classes to "),i("strong",[e._v("model the data")]),e._v(" that will be exchanged between the BLL and the Presentation Layer. You can also "),i("strong",[e._v("model the BLL methods")]),e._v(' that will be used, effectively providing a "contract" between the PL and BLL.')]),e._v(" "),i("li",[e._v("Determine the "),i("strong",[e._v("order of events")]),e._v(" that will allow the user to see what they need to know and enter what we need to gather.")]),e._v(" "),i("li",[e._v("Sketch an "),i("strong",[e._v("implementation plan")]),e._v(" that details what will have to happen behind the scenes of the user interface. Pay particular attention to separating the "),i("strong",[e._v("interactions with the UI")]),e._v(" from the "),i("strong",[e._v("business processing")]),e._v(" that is required to validate and persist the data.")])]),e._v(" "),i("h2",{attrs:{id:"clarifying"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#clarifying","aria-hidden":"true"}},[e._v("#")]),e._v(" Clarifying")]),e._v(" "),i("p",[e._v("Sometimes we are fortunate enough to get requirements in writing. Other times we have to write out the requirements ourselves (usually after several discussions with the client). In either case, you get to a point where you need to specifically identify and name the data points in a given part of the program. Naming the data that the end user is working with helps turn our focus to the "),i("strong",[e._v("informational")]),e._v(" aspects of the problem.")]),e._v(" "),i("p",[e._v("Take, for example, the simple case of creating a login page. The general requirement might be expressed as follows.")]),e._v(" "),i("blockquote",[i("p",[e._v('"We only want authorized users to access our system. In order to do that, we want them to sign in to the application. Everybody has an assigned user name and password that they use to sign in."')])]),e._v(" "),i("p",[e._v("In this description, we identify two pieces of information: "),i("code",[e._v("UserName")]),e._v(" and "),i("code",[e._v("Password")]),e._v(".")]),e._v(" "),i("p",[e._v("We might have additional information about user registration. For example:")]),e._v(" "),i("blockquote",[i("p",[e._v('"Employees are assigned a user name and initial, temporary password. Then, when they sign in for the first time, the system will ask them to enter and confirm a permanent password along with their first and last name. At that point, the user will be able to access the secured parts of the site. Subsequent logins won\'t require this profile setup of the user."')])]),e._v(" "),i("p",[e._v("Here, we have something that happens "),i("em",[e._v("after")]),e._v(" the user logs in. The information that must be captured is the user's "),i("code",[e._v("FirstName")]),e._v(", "),i("code",[e._v("LastName")]),e._v(", "),i("code",[e._v("Password")]),e._v(", and "),i("code",[e._v("PasswordConfirmation")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"comparing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#comparing","aria-hidden":"true"}},[e._v("#")]),e._v(" Comparing")]),e._v(" "),i("p",[e._v("With the data items explicitly listed for the two forms in the login portion of our application, we would need to compare those against the ERD. The relevant ERD for this might look like the following:")]),e._v(" "),i("p",[i("em",[e._v("TODO: ERD")]),e._v(" - UserName (PK), Password, Salt, FirstName, LastName, Email, InitialLoginDate, AccountLockOutDate (O)")]),e._v(" "),i("p",[e._v("In the ERD, we see that there are columns in the "),i("code",[e._v("Users")]),e._v(" table that match up with the data in our two forms:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Login Form")]),e._v(" - "),i("code",[e._v("UserName")]),e._v(" and "),i("code",[e._v("Password")])]),e._v(" "),i("li",[i("strong",[e._v("Initial Profile Form")]),e._v(" - "),i("code",[e._v("FirstName")]),e._v(", "),i("code",[e._v("LastName")]),e._v(", and "),i("code",[e._v("Password")])])]),e._v(" "),i("p",[e._v("We can also see that the "),i("code",[e._v("PasswordConfirmation")]),e._v(" listed in our earlier step doesn't appear in the database, and that there are additional columns of data in the "),i("code",[e._v("Users")]),e._v(" table that haven't been mentioned at all in the earlier requirements.")]),e._v(" "),i("p",[e._v("These comparisons lead us toward our next step of distinguishing between data we show to the user from data that the user has to enter for themselves.")]),e._v(" "),i("h2",{attrs:{id:"distinguishing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#distinguishing","aria-hidden":"true"}},[e._v("#")]),e._v(" Distinguishing")]),e._v(" "),i("p",[e._v("In the "),i("strong",[e._v("Login Form")]),e._v(", the display vs input distinction is fairly self-evident. No specific database information has to be presented to the user, but the user has to enter their username and password in order to sign in.")]),e._v(" "),i("p",[e._v("In the "),i("strong",[e._v("Initial Profile Form")]),e._v(", however, we might want to display the person's "),i("code",[e._v("UserName")]),e._v(" while having them input their "),i("code",[e._v("FirstName")]),e._v(", "),i("code",[e._v("LastName")]),e._v(", "),i("code",[e._v("Password")]),e._v(", and "),i("code",[e._v("PasswordConfirmation")]),e._v(".")]),e._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),i("p",[e._v("NOTE: These distinctions between displaying and entering data fit in nicely with "),i("strong",[e._v("CQRS")]),e._v(" (Command-Query Responsibility Segregation). Any time we have database information to display to the user, it can be obtained as a "),i("em",[e._v("Query")]),e._v(", while information that the user gives us for processing and storing in the database can be packaged as a "),i("em",[e._v("Command")]),e._v(". A formal CQRS implementation would package the query and command as objects, but in the sample requirements given above this formal structuring is not strictly required.")])]),e._v(" "),i("h2",{attrs:{id:"designing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#designing","aria-hidden":"true"}},[e._v("#")]),e._v(" Designing")]),e._v(" "),i("p",[e._v("Sketching out a user interface at this stage is helpful in visualizing what the user will be working with. During this step, it's possible that other information from the database might be needed by the user in order for them to complete their task, and that information should be included in the design.")]),e._v(" "),i("p",[e._v("Looking once again at the login form requirements, a simple sketch of the main component would look like this:")]),e._v(" "),i("p",[i("img",{attrs:{src:a(169),alt:"Login Form"}})]),e._v(" "),i("p",[e._v("Notice the circled tags for the textboxes and button above. Labeling input fields, buttons, and other interactive components with simple identifiers (A, B, C, etc) will make it easier to refer to those parts in the upcoming steps of ordering and planning.")]),e._v(" "),i("p",[e._v("Likewise, the form for initializing the user's profile could look like this.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(168),alt:"User Profile"}})]),e._v(" "),i("h2",{attrs:{id:"modeling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#modeling","aria-hidden":"true"}},[e._v("#")]),e._v(" Modeling")]),e._v(" "),i("p",[e._v("Modeling the data into classes helps to group related information so that it can be more easily moved between the BLL and Presentation layers.")]),e._v(" "),i("p",[e._v("For example, a "),i("code",[e._v("UserLogin")]),e._v(" class could be created to hold the login information that will be sent to the BLL.")]),e._v(" "),i("div",{staticClass:"language-cs extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("public class UserLogin\n{\n    public string UserName { get; set; }\n    public string Password { get; set; }\n}\n")])])]),i("p",[e._v("The BLL class would have a method to process the login:")]),e._v(" "),i("div",{staticClass:"language-cs extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("public bool ValidateLogin(UserLogin signin) {}\n")])])]),i("p",[e._v("Likewise, the data from the user profile form could be packaged into a class to send into the BLL as a first-time setup.")]),e._v(" "),i("div",{staticClass:"language-cs extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("public class UserProfile\n{\n    public string UserName { get; set; }\n    public string Password { get; set; }\n    public string FirstName { get; set; }\n    public string LastName { get; set; }\n}\n")])])]),i("p",[e._v("and the BLL method could be")]),e._v(" "),i("div",{staticClass:"language-cs extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("public void SetupProfile(UserProfile info) {}\n")])])]),i("p",[e._v("Notice that the implementation details for "),i("em",[e._v("how")]),e._v(" the presentation layer methods work and "),i("em",[e._v("how")]),e._v(" the BLL methods work is not needed at present. You are simply organizing information and trying to forsee how you could "),i("strong",[e._v("exchange data")]),e._v(" between the BLL and Presentation layers.")]),e._v(" "),i("h2",{attrs:{id:"ordering"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ordering","aria-hidden":"true"}},[e._v("#")]),e._v(" Ordering")]),e._v(" "),i("p",[e._v("At this step, the sketch of the form is examined in light of the order of events when the user works with the form. The first event of every form is when the it is first requested. (In ASP.Net Web Form applications, this is the "),i("code",[e._v("Page_Load()")]),e._v(" event.)")]),e._v(" "),i("p",[e._v("Typically, the other interactions to be considered are when the user clicks a button or does some other action that would trigger a call to some background processing on the form.")]),e._v(" "),i("p",[e._v('The login form opens with empty text boxes, so nothing special needs to be done during the page load. Clicking the "Sign In" button (C) is the only other event that triggers processing by the application.')]),e._v(" "),i("p",[e._v("There is a consequence, however, from the user signing in. If the user is signing in for the first time, then they need to enter their profile information. Thus, showing the User Profile form can be thought of as a potential response to the previous event, and this form's own events should be considered.")]),e._v(" "),i("p",[e._v("When the User Profile form loads up, the person's user name is displayed in the welcome message, so that can be thought of as a kind of lookup (though, in the case of security, would not have to involve an extra call to the database - the application presumably knows about the user's login credentials on each page, and we can get their username directly from the page).")]),e._v(" "),i("p",[e._v('The last interaction is when the user clicks the "Update Profile" button (E on the second form). The final step before actually coding the solution is to plan out what is happening during each event and detailing what needs to be done at the levels of the Presentation, Business Logic, and Data Access layers.')]),e._v(" "),i("h2",{attrs:{id:"planning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#planning","aria-hidden":"true"}},[e._v("#")]),e._v(" Planning")]),e._v(" "),i("p",[e._v("Once you have a mockup of the user interface and you know the order of events for the users' interactions, you can develop a plan of what needs to be done at each level of your application, from the front end to the database in the back end.")]),e._v(" "),i("p",[e._v("There are many different ways you can outline this plan. For example, you can use a simple bulleted outline of the events. Here is an example using this approach that combines the earlier login and user profile forms on a single page.")]),e._v(" "),i("h3",{attrs:{id:"login-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#login-form","aria-hidden":"true"}},[e._v("#")]),e._v(" Login Form")]),e._v(" "),i("p",[i("img",{attrs:{src:a(169),alt:"Login Form"}})]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Form Design:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("RequiredFieldValidator")]),e._v(" for (A) and (B)")])])]),e._v(" "),i("li",[i("strong",[e._v("Behaviour:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Page_Load()")]),e._v(" - (A) and (B) are empty on GET request")]),e._v(" "),i("li",[e._v("(C) - "),i("code",[e._v("SignIn_Click()")]),e._v(" "),i("ul",[i("li",[e._v("Check validation")]),e._v(" "),i("li",[e._v("Send user login to BLL\n"),i("ul",[i("li",[i("code",[e._v("ValidateLogin(UserLogin)")])]),e._v(" "),i("li",[e._v("returns "),i("code",[e._v("true")]),e._v(" if user needs to set up profile")]),e._v(" "),i("li",[e._v("throws an exception if the login fails")])])])])])])])]),e._v(" "),i("h3",{attrs:{id:"user-profile-form"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#user-profile-form","aria-hidden":"true"}},[e._v("#")]),e._v(" User Profile Form")]),e._v(" "),i("p",[i("img",{attrs:{src:a(168),alt:"Profile Setup Form"}})]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Form Design:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("RequiredFieldValidator")]),e._v(" for (A), (B), (C), and (D)")]),e._v(" "),i("li",[i("code",[e._v("CompareValidator")]),e._v(" for (C) and (D) to match")])])]),e._v(" "),i("li",[i("strong",[e._v("Behaviour:")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("Page_Load()")]),e._v(" "),i("ul",[i("li",[e._v("All input fields are empty on GET request")]),e._v(" "),i("li",[i("code",[e._v("UserName")]),e._v(" displayed in welcom message")])])]),e._v(" "),i("li",[e._v("(E) - "),i("code",[e._v("UpdateProfile_Click()")]),e._v(" "),i("ul",[i("li",[e._v("Check validation")]),e._v(" "),i("li",[e._v("Send profile to BLL\n"),i("ul",[i("li",[i("code",[e._v("SetupProfile(UserProfile)")])]),e._v(" "),i("li",[e._v("throws exception if the profile is already set or if the user does not exist")])])])])])])])]),e._v(" "),i("h2",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v('The benefit of developing a plan before you start writing code is that it gives you a chance to confirm your general understanding of both the problem and your proposed solution. It allows you to "fact-check" your design and uncover any problems. Additionally, it gives you a set of page mockups that you can run by your end users and client to validate your understanding.')]),e._v(" "),i("p",[e._v("Development plans save you time as a developer, because they reduce the liklihood of you spending time on code that doesn't meet the needs of the user.")])])}],n=a(0),s=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},i,!1,null,null,null);t.default=s.exports}}]);