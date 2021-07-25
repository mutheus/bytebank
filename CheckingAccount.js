import { Account } from './Account.js';

export class CheckingAccount extends Account {
  static accountsNumber = 0;
  
  constructor(bankNumber, client) {
    super(0, bankNumber, client);
    CheckingAccount.accountsNumber += 1;
  }
}
