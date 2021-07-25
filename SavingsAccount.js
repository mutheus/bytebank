import { Account } from './Account.js';

export class SavingsAccount extends Account {
  constructor(initialAccountBalance, bankNumber, client) {
    super(initialAccountBalance, bankNumber, client);
  }
}
