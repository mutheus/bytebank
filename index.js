import { Client } from './Client.js';
import { CheckingAccount } from './CheckingAccount.js';

const client1 = new Client('Ricardo', 12388899989);
const client2 = new Client('Alice', 12377788878);

const checkingAccount1 = new CheckingAccount('655', client1);
const checkingAccount2 = new CheckingAccount('103', client2);

checkingAccount1.deposit(300);
checkingAccount1.withdraw(130);
checkingAccount1.transfer(20, checkingAccount2);

console.log(checkingAccount1);
console.log(checkingAccount2);
console.log(CheckingAccount.accountsNumber);
