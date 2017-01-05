Version 1
=========

Short/medium-term plans
-----------------------

- search filters on ledger view
- server backend / storage
  - Sandstorm.io package
    - couchdb API via token, app itself via static publishing so offline can work?
- thousands separators on numeric inputs
- clear unbalanced offsets validation error on update (submit won't fire)
- think of a project name

Version 2
=========

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

- form generation?
  - consider JsonSchema
- rework event system?
- Type annotations?
- Hot reload: remove imperative code from top-level / main module, or do some custom `__hotReload` logic
- Future: rewind/fast-forward? (enough to do from DB side?)
- tagged template function for creating vdom nodes... jade-like syntax?
