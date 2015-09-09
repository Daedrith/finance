Version 1
=========

Short/medium-term plans
-----------------------

- dynamically render datalist
- doc edit mode (hidden _id, _rev fields?)
- implement `db-query` and simple account ledger view
- flesh out form cycle:
  - saving state (maybe skip this, since local-db shouldn't have any precept-able delay; then again the API is async, and we only want to reset if we know we don't get an error)
  - error feedback (async)
  - remote sync feedback (maybe completely out-of-channel? can we persistently attach an error condition to a particular document locally?)
- routing / UI framework
- server backend / storage

Framework
---------

- refactoring:
  - decide on directory structure, module system
    - possibly a build system to glue it together
  - channel registration
- routing
  - change listener lifecycle
  - modals?
- form generation?
  - form component for better composition?
  - validation
    - html5 validation rocks. However, need to think about errors down the line (e.g. local-db error, remote db error). Command-Query Separation tells us that the command should be fire-and-forget, and 
- CSS framework
  - bootstrap cards?
  - think about overall UI (cards are attractive; perhaps even avoid modal UIs? interesting conflict resolution)
- `db-query` function (hg adapter for a map-reduce query)
- decide if I want to commit to event sourcing

Views
-----

- acct add/edit
  - use the same channel (_id/_rev in hidden field?)
- general ledger
- acct list/hierarchy
- acct ledger
  - acct+subs ledger
  - 
- xact add/edit?

Channels
--------

- acct add/edit
- xact add/edit

Version 2
=========

- Import
- Recurring
- Reconciliation
