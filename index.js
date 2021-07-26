import { Client } from './Client.js';
import { CheckingAccount } from './Accounts/CheckingAccount.js';
import { SavingsAccount } from './Accounts/SavingsAccount.js';
import { SalaryAccount } from './Accounts/SalaryAccount.js';
import { Director } from './Employees/Director.js';
import { Manager } from './Employees/Manager.js';
import { Authentication } from './Authentication.js';

/*
const client1 = new Client('Ricardo', 12388899989);

const checkingAccount1 = new CheckingAccount('655', client1);
const savingsAccount1 = new SavingsAccount(50, '103', client1);
const salaryAccount1 = new SalaryAccount(client1);

checkingAccount1.deposit(300);
checkingAccount1.withdraw(150);
salaryAccount1.withdraw(20);

console.log(checkingAccount1);
console.log(savingsAccount1);
console.log(salaryAccount1);
*/

const director = new Director('Rodrigo', 10000, 12344466667);
director.createPassword('123456');

const manager = new Manager('Ricardo', 5000, 12322233334);
manager.createPassword('123');

const client = new Client('Lais', 12355544443, '123');

const directorIsLogged = Authentication.login(director, '123456');
const managerIsLogged = Authentication.login(manager, '123');
const clientIsLogged = Authentication.login(client, '1234');

console.log(directorIsLogged, managerIsLogged, clientIsLogged);
