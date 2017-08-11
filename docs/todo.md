Version 1
=========

Bugs
----

- Post date field timezone
- find possible event emitter leak?
- change feed filter not working
- soft-set-hook: don't set if element is document.activeElement

Short/medium-term plans
-----------------------

- sort account datalist by category then name
- search filters on ledger view
  - dynamic limit on query for endless scroll
- server backend / storage
  - Figure out if updating to latest PouchDB fixed sync stability issues
  - CI/CD (consistent build and publishing process)
  - CouchDB server; self-signed cert for encryption? client cert for auth?

QoL improvements
----------------

- copy transaction
- transaction form:
  - change placeholders depending on account type:
    - asset: deposit vs. withdraw
    - liability: payoff vs. borrow?
    - expense: charge vs. refund
    - income: ? vs. income
  - add default offset polarity to account types:
    - tab after entering account: jump to default offset polarity
    - if acct type has different default polarity than balance, don't add balance by default
  - type * in an amount, on blur replace with balance
  - shift-enter: submit, but stay on page and clear form (increment date by 1 minute?)
- accounts list:
  - group by tag
  - income/expense summary: rate instead of amount
  - cashflow/equity summary (until moved to a dashboard)
- save/restore scroll offset, set to 0 when navigating
- standardize negative amount display style
- thousands separators on numeric inputs
- clear unbalanced offsets validation error on update (submit won't fire)
- think of a project name
- performance
- perhaps an offset sorting scheme? apply to form as well? or allow offsets to be manually re-sorted on form?
- debug tools

Version 2
=========

- email-triggered transaction creation
- push notification for new transactions (filter by ___?)
- navigation state stack
- service worker
- notification system
- Import
- Recurring
  - Interest rate calculation: possibly based on account in associated offsets, find last transaction and make interest a suggested amount?
- Reconciliation
- Reports:
  - Home screen widgets
- More account attributes, e.g. credit limits?

Wishlist
========

- Sandstorm.io package
  - couchdb API via token, app itself via static publishing so offline can work?
- form generation?
  - consider JsonSchema
- rework event system?
- rework state / computed views?
- Type annotations?
- Hot reload: remove imperative code from top-level / main module, or do some custom `__hotReload` logic
- Future: rewind/fast-forward? (enough to do from DB side?)
- tagged template function for creating vdom nodes... jade-like syntax?
