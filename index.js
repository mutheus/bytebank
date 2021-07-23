import { Client } from './Client.js';
import { CheckingAccount } from './CheckingAccount.js';

const clientRicardo = new Client();
clientRicardo.name = "Ricardo";
clientRicardo.id = 12388899989;

const clientAlice = new Client();
clientAlice.name = "Alice";
clientAlice.id = 12377788878;

const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.bankNumber = '655';

checkingAccountRicardo.deposit(300);
const withdrawValue = checkingAccountRicardo.withdraw(130);

console.log(withdrawValue);
console.log(checkingAccountRicardo);
