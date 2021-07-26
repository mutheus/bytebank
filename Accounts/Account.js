export class Account {
  constructor(accountBalance, bankNumber, client) {
    if (this.constructor === Account) {
      throw new Error(`You shouldn't declarer an Account instance.`);
    }
    
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
    throw new Error('This is an abstract method, you should overwrite it.');
  }
  
  _withdraw(fee, value) {
    const withdrawValue = fee * value;
    
    if (this._accountBalance >= withdrawValue) {
      this._accountBalance -= withdrawValue;
      
      return withdrawValue;
    }
    
    return 0;
  }
  
  deposit(value) {
    this._accountBalance += value;
  }
  
  transfer(value, account) {
    const transferValue = this.withdraw(value);
    account.deposit(transferValue);
  }
}
