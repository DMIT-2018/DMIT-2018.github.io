<Query Kind="Statements">
  <Connection>
    <ID>83ab494d-ca4c-477d-bf78-ee2affeb5956</ID>
    <Persist>true</Persist>
    <Server>.</Server>
    <Database>WorkSchedule</Database>
  </Connection>
</Query>

var q1 = from x in Skills
orderby x.Description
select 	x.Description;

q1.Dump("Q1");

var q2 = from x in Skills
		where x.EmployeeSkills.Count( )==0
		select x.Description;
q2.Dump("Q2");

var q3 = from x in Skills
		where x.RequiresTicket
		select new{
			Description = x.Description,
			Employees = from y in x.EmployeeSkills
						orderby y.YearsOfExperience descending
						select new{
							Name = y.Employee.FirstName + " " + y.Employee.LastName,
							Level = y.Level==1?"Novice":y.Level==2?"Proficient":"Expert",
							YearsExperience = y.YearsOfExperience
						}
		};
q3.Dump("Q3");

var q4=from x in Employees
where x.EmployeeSkills.Count() > 1
select new{
	Name = x.FirstName + " " + x.LastName,
	Skills = from y in x.EmployeeSkills
				select new{
					Description = y.Skill.Description,
					Level = y.Level==1?"Novice":y.Level==2?"Proficient":"Expert",
					YearsExperience = y.YearsOfExperience
				}
		};
q4.Dump("Q4");

var q5 = from x in Shifts
		where x.PlacementContract.Location.Name.Contains("Nait")
		group x by x.DayOfWeek into groupDay
		orderby groupDay.Key
		select new{
			DayOfWeek = groupDay.Key==0?"Sun":
						groupDay.Key==1?"Mon":
						groupDay.Key==2?"Tue":
						groupDay.Key==3?"Wed":
						groupDay.Key==4?"Thu":
						groupDay.Key==5?"Fri":
						"Sat",
			EmployeesNeeded = groupDay.Sum (row => row.NumberOfEmployees)
		};
q5.Dump("Q5");

var EmployeeYOE = from x in Employees
			select new{
				Name = x.FirstName + " " + x.LastName,
				YOE = x.EmployeeSkills.Sum(row => row.YearsOfExperience)
			};
//EmployeeYOE.Dump();

var q6= from x in EmployeeYOE
		where x.YOE == EmployeeYOE.Max (row => row.YOE )
		select x;
q6.Dump("Q6");

var q7 = from x in Employees
	orderby x.LastName, x.FirstName
	where !x.Schedules.Any (row => row.Day.Month == 11 )
	select x.LastName + ", " + x.FirstName;
q7.Dump("Q7");

var q8 = from x in Schedules.ToList()
		 where x.Day.Month == 11
		 group x by x.Employee into groupEmployee
		 select new{
		 	Name = groupEmployee.Key.FirstName + " " + groupEmployee.Key.LastName,
			RegualrEarnings = groupEmployee.Where(row => !row.OverTime).Sum(row=> row.HourlyWage * (row.Shift.EndTime- row.Shift.StartTime).Hours).ToString("0.00"),
			OverTimeEarnings = groupEmployee.Where(row => row.OverTime).Sum(row=> row.HourlyWage * 1.5m * (row.Shift.EndTime-row.Shift.StartTime).Hours).ToString("0.00"),
			NumberOfShifts = groupEmployee.Count()
		 };
q8.Dump("Q8");