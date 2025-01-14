-- Populate the department, employee, role tables

-- Populate the department table
INSERT INTO department (id, department_name)
VALUES (DEFAULT, 'Sales'),
       (DEFAULT, 'Engineering'),
       (DEFAULT, 'Finance'),
       (DEFAULT, 'Legal'),
       (DEFAULT, 'Operations'),
       (DEFAULT, 'Project Management'),
       (DEFAULT, 'Senior Management'),
       (DEFAULT, 'Complex Solutions'),
       (DEFAULT, 'Release Management'),
       (DEFAULT, 'Development');

-- Populate the role table
INSERT INTO role (id, title, salary, department_id)
VALUES (DEFAULT, 'Salesperson', 100000, 1),
       (DEFAULT, 'Engineer', 120000, 2),
       (DEFAULT, 'Accountant', 110000, 3),
       (DEFAULT, 'Attorney', 130000, 4),
       (DEFAULT, 'Operations Manager', 140000, 5),
       (DEFAULT, 'Project Manager', 150000, 6),
       (DEFAULT, 'Senior Manager', 160000, 7),
       (DEFAULT, 'Complex Solutions Manager', 170000, 8),
       (DEFAULT, 'Release Manager', 180000, 9),
       (DEFAULT, 'Development Manager', 190000, 10);

-- Populate the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (DEFAULT, 'John', 'Doe', 1, 6),
       (DEFAULT, 'Jane', 'Doe', 2, 5),
       (DEFAULT, 'Alice', 'Johnson', 3, 5),
       (DEFAULT, 'Bob', 'Smith', 4, 7),
       (DEFAULT, 'Karen', 'Johnson', 5, 7),
       (DEFAULT, 'Kurt', 'Smith', 6, 7),
       (DEFAULT, 'Katie', 'Jackson', 7, NULL),
       (DEFAULT, 'Jim', 'Rogers', 8, 7),
       (DEFAULT, 'Katherine', 'Wilson', 9, 7),
       (DEFAULT, 'Ted', 'Foster', 10, 7);

