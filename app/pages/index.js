
import home from './home';
import account from './account';
import accounts from './accounts';
import xact from './xact';
import ledger from './ledger';

export default {
  '/': home,
  '/accounts': accounts,
  '/accounts/:id': account,
  '/xacts': ledger,
  '/xacts/new': xact,
  '/xacts/:id': xact,
};