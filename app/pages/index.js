
import home from './home';
import account from './account';

export default {
  '/': home,
  '/accounts/:id': account
};