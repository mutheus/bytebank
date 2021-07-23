export class CheckingAccount {
  bankNumber;
  client;
  
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
  
  transfer(value, checkingAccount) {
    const transferValue = this.withdraw(value);
    
    checkingAccount.deposit(transferValue);
  }
}
