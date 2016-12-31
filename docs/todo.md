Version 1
=========

Short/medium-term plans
-----------------------

- notification system
- search filters on ledger view
- flesh out form cycle:
  - saving state: lock down, wait indicator
  - error feedback (async): unlock
  - on success: unlock, reset form
  - remote sync feedback (maybe completely out-of-channel? can we persistently attach an error condition to a particular document locally?)
- server backend / storage
- think of a project name

Framework
---------

- form generation?
  - consider JsonSchema
- rework event system?

Version 2
=========

- Import
- Recurring
  - Interest rate calculation
- Reconciliation

Wishlist
========

- Type annotations?
- Hot reload: remove imperative code from top-level / main module, or do some custom `__hotReload` logic
- Future: rewind/fast-forward? (enough to do from DB side?)
- tagged template function for creating vdom nodes... jade-like syntax?
