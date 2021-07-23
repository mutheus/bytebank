import { Client } from './Client.js';

export class CheckingAccount {
  bankNumber;
  
  _client;
  _accountBalance = 0;
  
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
