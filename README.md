# Employee Tracker

## Description
The Employee Tracker is a command line prompt application that utilizes Inquirer, PostgreSQL, and Node JS to allows users to manage and maintain employee information.
Users will be able to create a SQL Database, create tables, and populate the tables with seed data.
Once the tables are populated, the user can manage the role, department, the manager an employee is assigned to, and salary information for all employees.

## Licensing
There are no licenses required to use this application.

## Installation
Users will need to install the "Inquirer" package via NPM. To install the "Inquirer" package via NPM, follow these steps:
•	Open Visual Studio on your local computer.
•	Navigate to the "Employee-Tracker" repository.
•	Right click on the "src" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
•	Type "npm i inquirer@8.2.4" and click the "Enter" key.

Users will also need to install the "PG" package via NPM. To install the "PG" package via NPM, follow these steps:
•	Open Visual Studio on your local computer.
•	Navigate to the "Employee-Tracker" repository.
•	Right click on the "src" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
•	Type "npm install pg" and click the "Enter" key.

## How to Connect to PostgreSQL
Once all required packages have been installed, the user will need to connect to their PostgreSQL database.
To connect to your local database, follow these steps:

•	Open Visual Studio on your local computer.
•	Navigate to the "Employee-Tracker" repository.
•	Right click on the "db" subfolder, from the "Employee-Tracker" repository, and select "Open In Integrated Terminal".
- Type "psql -U postgres -h localhost" and click the "Enter" key.
- Provide your postgreSQL account password and click the "Enter" key.
- After successfully logging in, type "\c employee_tracker_db" and click the "Enter" key. (NOTE: If your database is a different name, then update the command line to have your database name).
- Type "\i schema.sql" and click the "Enter" key.  This will run the SQL file and create the database, if it does not exist.
- Type "\i schema2.sql" and click the "Enter" key.  This will create the necessary tables, if they do not exist.
- Type "\i seeds.sql" and click the "Enter" key.  This will populate the employee, role, and department tables with seed data.
- Type "\q" to exist PostgreSQL.

## How to Run the Command Line Application

## Video Walkthrough

## FAQs
