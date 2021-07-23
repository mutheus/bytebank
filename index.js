class Client {
  name;
  id;
}

class CheckingAccount {
  bankNumber;
  _accountBalance = 0;
  
  withdraw(value) {
    if (this._accountBalance >= value) {
      this._accountBalance -= value;
      
      return value;
    }
  }
  
  deposit(value) {
    if (value < 0) return;
    
    this._accountBalance += value;
  }
}

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
