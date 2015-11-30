
import home from './home';
import account from './account';
import xact from './xact';

export default {
  '/': home,
  '/accounts': account,
  '/accounts/:id': account,
  '/xacts': xact,
  '/xacts/:id': xact,
};