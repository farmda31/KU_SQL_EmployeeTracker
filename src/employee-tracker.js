const { Client } = require('pg');
const inquirer = require('inquirer');
const { type } = require('os');

const client = new Client({
    user: 'postgres', // replace with your PostgreSQL username
    host: 'localhost',
    database: 'employee_tracker_db',
    password: '', // replace with your PostgreSQL password
    port: 5432,
});

client.connect()
    .then(() => console.log('Connected to the database')) 
    .catch(err => console.error('Error connecting to the database', err));

async function viewAllDepartments() {
    try {
        const res = await client.query('SELECT * FROM department');
    console.table(res.rows);
} catch (err) {
    console.error('Error fetching departments:', err);
    }
}


async function viewAllRoles() {
    try { 
        const res = await client.query('SELECT * FROM role');
    console.table(res.rows);
} catch (err) {
    console.error('Error fetching roles:', err);
    }
}

async function viewAllEmployees() {
    try {
    const res = await client.query('SELECT * FROM employee');
    console.table(res.rows);
} catch (err) {
    console.error('Error fetching employee:', err);
    }
}

async function AddDepartment() {
    const { department_name } = await inquirer.prompt({
        type: 'input',
        name: 'department_name',
        message: 'Enter the name of the new department:'
    });

    try {
        await client.query('INSERT INTO department (department_name) VALUES ($1)', [department_name]);
        console.log(`Added department ${department_name}`);
    } catch (err) {
        console.error('Error adding department:', err);
    }
}

async function AddRole() {
    const { title, salary, departmentId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the new role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary of the new role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID of the new role:'
        }
    ]);

    try {
        await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, departmentId]);
        console.log(`Added role ${title}`);
    } catch (err) {
        console.error('Error adding role:', err);
    }
}

async function AddEmployee() {
    const roles = await client.query('SELECT * FROM role');
    const roleChoices = roles.rows.map(role => ({
        name: role.title,
        value: role.id
    }));

    const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the new employee:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the new employee:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID of the new employee:',
            choices: roleChoices // Provides the available choices from the roles table
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID of the new employee:',
            default: null // Allow for a manager to not be assigned.
        }
    ]);

    try {
        await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [firstName, lastName, roleId, managerId]);
        console.log(`Added employee ${firstName} ${lastName}`);
    }
    catch (err) {
        console.error('Error adding employee:', err);
    }
}

async function updateEmployeeRole(employeeId, newRoleId) {
    try {
    await client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [newRoleId, employeeId]);
    console.log(`Updated employee ID ${employeeId} to new role ID ${newRoleId}`);
} catch (err) {
    console.error('Error updating employee role:', err);
    }
}

async function updateEmployeeManager (employeeId, newManagerId) {
    try {
        await client.query('UPDATE employee SET manager_id = $1 WHERE id = $2', [newManagerId, employeeId]);
        console.log(`Updated employee ID ${employeeId} to new manager ID ${newManagerId}`);
    } catch (err) {
        console.error('Error updating employee manager:', err);
    }
}

async function viewEmployeesByManager (managerId) {
    console.log('Manager ID:', managerId);
    if (!managerId || isNaN(managerId)) {
        console.error('Please provide a valid manager ID.');
        return;
    }
    try {
        const res = await client.query('SELECT * FROM employee WHERE manager_id = $1', [managerId]);
        console.table(res.rows);
    } catch (err) {
        console.error('Error fetching employees by manager:', err);
    }
}

async function viewEmployeesByDepartment (departmentId) {
    console.log('Department ID:', departmentId);
    if (!departmentId || isNaN(departmentId)) {
        console.error('Please provide a valid department ID.');
        return;
    }
    try {
        const res = await client.query(`SELECT e.first_name, e.last_name, r.title, d.department_name 
            FROM employee e
            JOIN role r ON e.role_id = r.id
            JOIN department d ON r.department_id = d.id
            WHERE d.id = $1`, [departmentId]);
        console.table(res.rows);
    } catch (err) {
        console.error('Error fetching employees by department:', err);
    }
}

async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Update an Employees Manager',
            'View Employees by Manager',
            'View Employees by Department',
            'Exit'
        ]
    });

    switch (action) {
        case 'View All Departments':
            await viewAllDepartments();
            break;
        case 'View All Roles':
            await viewAllRoles();
            break;
        case 'View All Employees':
            await viewAllEmployees();
            break;
        case 'Add a Department':
            await AddDepartment();
            break;
        case 'Add a Role':
            await AddRole();
            break;
        case 'Add an Employee':
            await AddEmployee();
            break;        
        case 'Update an Employee Role':
            const { employeeId, newRoleId } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeId',
                    message: 'Enter the ID of the employee to update:'
                },
                {
                    type: 'input',
                    name: 'newRoleId',
                    message: 'Enter the new role ID:'
                }
            ]);
            await updateEmployeeRole(employeeId, newRoleId);
            break;
        case 'Update an Employees Manager':
            const { empId, mgrId } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'empId',
                    message: 'Enter the ID of the employee to update:'
                },
                {
                    type: 'input',
                    name: 'mgrId',
                    message: 'Enter the new manager ID:'
                }
            ]);
            await updateEmployeeManager(empId, mgrId);
            break;
            case 'View Employees by Manager':
                const { managerId } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'managerId',
                        message: 'Enter the manager ID to view employees:'
                    }
                ]);
                await viewEmployeesByManager(managerId);
                break;
            case 'View Employees by Department':
                const { departmentId } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'departmentId',
                        message: 'Enter the department ID to view employees:'
                    }
                ]);
                await viewEmployeesByDepartment(departmentId);
                break;
            case 'Exit':
            const { confirmExit } = await inquirer.prompt({
                type: 'confirm',
                name: 'confirmExit',
                message: 'Are you sure you want to exit?',
                default: false
            });
            if (confirmExit) {
                await client.end();
                return;
            }
            break;
    }

    mainMenu(); // Call the main menu again
}

// Start the application
mainMenu();
