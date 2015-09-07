Version 1
=========

Framework
---------

- refactoring:
  - decide on directory structure, modules
  - channel registration
- routing
  - change listener lifecycle
  - modals?
- form generation?
  - form component for better composition?
- validation
  - I guess my db state is the persistent part, and the hg state is that plus the transient state?
  - shouldn't html5 forms have enough validation features?
  - think about how I interact with the DOM. Do I set up two-way bindings back to state (onchange -> channel)?
- CSS framework
  - bootstrap cards?
- `db-query` function (hg adapter for a map-reduce query)

Views
-----

- acct add/edit
  - use the same channel (_id in hidden field?)
- general ledger
- acct list/hierarchy
- acct ledger
  - acct+subs ledger
  - 
- xact add/edit?

Channels
--------

- acct add/edit (add edit)
- xact add/edit

Version 2
=========

- Import
- Recurring
- Reconciliation
