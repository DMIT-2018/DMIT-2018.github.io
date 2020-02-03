# LINQ and LinqPad Exercise (3 Marks)

## Private GitHub Repo Only

This exercise is based on the Work Schedule database. For this exercise, provide your answers as LinqPad (.linq) documents. Use a single LinqPad document for each question.

![Schedule ERD](./work_schedule_erd.png)

1. List all the skills for which we do not have any qualfied employees.

    ![Skills lacking qualified employees](./q3.png)

1. Show all skills requiring a ticket and which employees have those skills. Include all the data as seen in the following image. Order the employees by years of experience (highest to lowest). Use the following text for the levels: 0 = Novice, 1 = Proficient, 2 = Expert. (Hint: Use nested [ternary operators](https://msdn.microsoft.com/en-us/library/ty67wk28.aspx) to handle the levels as text.)

    ![Employees with skills requiring a ticket](./q1.png)

1. List all employees with multiple skills; ignore employees with only one skill. Show the name of the employee and the list of their skillsets; for each skill, show the name of the skill, the level of competance and the years of experience. Use the following text for the levels: 0 = Novice, 1 = Proficient, 2 = Expert.

    ![Employees with multiple skills](./new_q4.png)

1. From the shifts scheduled for NAIT's placement contracts, show the number of employees needed for each day (ordered by day-of-week). Display the name of the day of week (Sunday, as the first day of the week, is number zero) and the number of employees needed.

    ![Employees needed per day for NAIT contract](./q4b.png)

1. List all the employees with the most years of experience.

    ![Employees with top years experience](./q5.png)

1. List the names of all employees who did not work in November. Show the name in the format of "LastName, FirstName" and sort it by last name and then first name.

    ![Employees who did not work in November](./new_q7.png)

1. For the month of January 2020, list the total earnings per employee along with the number of shifts, the regular earnings, and overtime earnings.

    **Note 1:** Remember that handling DateTime and TimeSpan calculations is best done in-memory; therefore, you should use a .ToList() in your linq's `from` clause so that the linq query is not converted to SQL.  

    **Note 2:** When doing your earnings calculations, remember that it's permissible to use method syntax inside of your linq query syntax.

    ![Employees Earnings for specific Month](./new_q8.png)
