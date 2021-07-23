import { Client } from './Client.js';
import { CheckingAccount } from './CheckingAccount.js';

const client1 = new Client();
client1.name = "Ricardo";
client1.id = 12388899989;

const client2 = new Client();
client2.name = "Alice";
client2.id = 12377788878;

const checkingAccount1 = new CheckingAccount();
checkingAccount1.client = client1;
checkingAccount1.bankNumber = '655';

const checkingAccount2 = new CheckingAccount();
checkingAccount2.client = client2;
checkingAccount2.bankNumber = '103';

checkingAccount1.deposit(300);
const withdrawValue = checkingAccount1.withdraw(130);
checkingAccount1.transfer(20, checkingAccount2);

console.log(checkingAccount1);
console.log(checkingAccount2);
