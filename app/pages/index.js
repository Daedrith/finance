
import home from './home';
import account from './account';
import accounts from './accounts';
import xact from './xact';

export default {
  '/': home,
  '/accounts': accounts,
  '/accounts/:id': account,
  '/xacts': xact,
  '/xacts/:id': xact,
};