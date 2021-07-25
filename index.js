import { Client } from './Client.js';
import { CheckingAccount } from './CheckingAccount.js';
import { SavingsAccount } from './SavingsAccount.js';
import { Account } from './Account.js';

const client1 = new Client('Ricardo', 12388899989);

const checkingAccount1 = new CheckingAccount('655', client1);
const savingsAccount1 = new SavingsAccount(0, '103', client1);

checkingAccount1.deposit(300);
checkingAccount1.withdraw(130);
checkingAccount1.transfer(20, savingsAccount1);

console.log(checkingAccount1);
console.log(savingsAccount1);
