
import home from './home';
import account from './account';

export default {
  '/': home,
  '/accounts': account,
  '/accounts/:id': account
};