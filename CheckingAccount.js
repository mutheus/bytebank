export class CheckingAccount {
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
