# Employee Tracker

## Description
Employee Tracker is a command line prompt application that utilizes Inquirer, PostgreSQL, and Node JS to allows users to manage and maintain employee information.
Users will be able to create a SQL Database, create tables, and populate the tables with seed data.
Once the tables are populated, the user can manage the role, department, the manager an employee is assigned to, and salary information for all employees.

## Licensing
There are no licenses required to use this application.

## Installation
Users will need to install the "Inquirer" package via NPM. To install the "Inquirer" package via NPM, follow these steps:
- Open Visual Studio on your local computer.
- Navigate to the "Employee-Tracker" repository.
- Right click on the "src" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
- Type "npm i inquirer@8.2.4" and click the "Enter" key.

Users will also need to install the "PG" package via NPM. To install the "PG" package via NPM, follow these steps:
- Open Visual Studio on your local computer.
- Navigate to the "Employee-Tracker" repository.
- Right click on the "src" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
- Type "npm install pg" and click the "Enter" key.

## How to Connect to PostgreSQL
Once all required packages have been installed, the user will need to connect to their PostgreSQL database.
To connect to your local database, follow these steps:

- Open Visual Studio on your local computer.
- Navigate to the "Employee-Tracker" repository.
- Right click on the "db" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
- Type "psql -U postgres -h localhost" and click the "Enter" key.
- Provide your postgreSQL account password and click the "Enter" key.
- After successfully logging in, type "\c employee_tracker_db" and click the "Enter" key. (NOTE: If your database is a different name, then update the command line to have your database name).
- Type "\i schema.sql" and click the "Enter" key.  This will run the SQL file and create the database, if it does not exist.
- Type "\i schema2.sql" and click the "Enter" key.  This will create the necessary tables, if they do not exist.
- Type "\i seeds.sql" and click the "Enter" key.  This will populate the employee, role, and department tables with seed data.
- Type "\q" to exist PostgreSQL.

## How to Run the Command Line Application
After the SQL database and tables have been created and populated, you are now ready to run the command line application.
To start using the application, follow these steps:

- Open Visual Studio on your local computer.
- Navigate to the "Employee-Tracker" repository.
- Right click on the "src" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal". (NOTE: Before running the employee-tracker.js through node js, you'll need to edit the password  on line 9 of the javascript file for your personal postgreSQL password.  If you do not update the password to your personal password, the application will not work.)
- Type "node employee-tracker.js" and click the "Enter" key.
- The command line will now show available options for queries that can be run.  Use the up and down arrows on your keyboard to highlight the query that you would like to run.  After selecting the desired query click the "Enter" key on your keyboard and then respond to each question appropriately.

## Available Queries
There are several queries available to run against the employee tracker database.  Please review the options below for details on each query.

- View All Departments - Provides a listing of all IDs and names for the existing departments.
- View All Roles - Provides a listing of all roles, salary information, and associated departments.
- View All Employees - Provides a listing of all employees' first and last names, their associated role, and the manager that they report to.
- Add a Department - Allows the user to create a new department.  The newly created department will be assigned the next available ID.
- Add a Role - Allows the user to create a new role.  The newly created role will be assigned the next available ID.
- Update an Employee Role - Allows the user to update any existing employee's associated role.
- Update an Employees Manager - Allows the user to update an existing employee's manager that they report to.
- View Employees by Manager - Allows the user to view all employees that are assigned to a specific manager.
- View Employees by Department - Allows the user to view all employees that are assigned to a specific department.
- Exit - Users can use this option to exit the application.

## Video Walkthrough
The video walkthrough is located at https://github.com/farmda31/KU_SQL_EmployeeTracker/blob/60b44b7ed419207247e483b028425bdacfa1f84e/Employee%20Tracker%20v2.mp4.

## FAQs
- Can I delete an existing option via the command line application? No.  Delete functionality is not currently available.
- Is it possible to add new columns to the existing tables? Yes. The schema2.SQL file contains the table information.  Any updates would need to be performed there, and this file would need to be rerun via PostgreSQL.
