Version 1
=========

Short/medium-term plans
-----------------------

- fix navigate back bug
- notification system
- search filters on ledger view
- account tag system
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
  - form component for better composition?
  - validation
    - html5 validation rocks. However, need to think about errors down the line (e.g. local-db error, remote db error). Command-Query Separation tells us that the command should be fire-and-forget, and... (forgot what I was going to write here)
  - would need a schema system... probably overkill for now

Views
-----

- top level view
  - navigation, notifications, etc.
- ledger
- acct list/hierarchy
- xact add/edit?

Channels
--------

- acct add/edit
- xact add/edit

Optimization
------------

- figure out where I use plain values or obesrv-values
- thunks

Misc
----

- modularize CSS

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
