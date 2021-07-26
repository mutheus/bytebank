import { Account } from './Account.js';

export class CheckingAccount extends Account {
  static accountsNumber = 0;
  
  constructor(bankNumber, client) {
    super(0, bankNumber, client);
    CheckingAccount.accountsNumber += 1;
  }
  
  withdraw(value) {
    const fee = 1.1;
      
    return this._withdraw(fee, value);
  }
}
