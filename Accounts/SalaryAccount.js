import { Account } from './Account.js';

export class SalaryAccount extends Account {
  constructor(client) {
    super(0, 145, client);
  }
  
  withdraw(value) {
    const fee = 1.01;
    
    return this._withdraw(fee, value);
  }
}
