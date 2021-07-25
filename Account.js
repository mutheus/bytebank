export class Account {
  constructor(accountBalance, bankNumber, client) {
    this._accountBalance = accountBalance;
    this._bankNumber = bankNumber;
    this._client = client;
  }
  
  get client() {
    return this._client;
  }
  
  set client(value) {
    if (value instanceof Client) {
      this._client = value; 
    }
  }
  
  get accountBalance() {
    return this._accountBalance;
  }
  
  withdraw(value) {
    const fee = 1,
      withdrawValue = fee * value;
      
    if (this._accountBalance >= withdrawValue) {
      this._accountBalance -= withdrawValue;
      
      return withdrawValue;
    }
  }
  
  deposit(value) {
    this._accountBalance += value;
  }
  
  transfer(value, account) {
    const transferValue = this.withdraw(value);
    account.deposit(transferValue);
  }
}
