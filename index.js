class Client {
  name;
  id;
}

class CheckingAccount {
  bankNumber;
  accountBalance;
  withdraw(value) {
    if (this.accountBalance >= value) {
      this.accountBalance -= value;
    }
  }
}

const clientRicardo = new Client();
clientRicardo.name = "Ricardo";
clientRicardo.id = 12388899989;

const clientAlice = new Client();
clientAlice.name = "Alice";
clientAlice.id = 12377788878;

const checkingAccountRicardo = new CheckingAccount();
checkingAccountRicardo.bankNumber = 0123;
checkingAccountRicardo.accountBalance = 0;

const deposit = 100;
checkingAccountRicardo.accountBalance = deposit;
console.log(checkingAccountRicardo.accountBalance);

checkingAccountRicardo.withdraw(200);
console.log(checkingAccountRicardo.accountBalance);
