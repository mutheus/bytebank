import { Client } from './Client.js';
import { CheckingAccount } from './Accounts/CheckingAccount.js';
import { SavingsAccount } from './Accounts/SavingsAccount.js';
import { SalaryAccount } from './Accounts/SalaryAccount.js';
import { Director } from './Employees/Director.js';
import { Manager } from './Employees/Manager.js';

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
