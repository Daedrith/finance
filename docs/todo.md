Version 1
=========

Short/medium-term plans
-----------------------

- doc edit mode (hidden _id, _rev fields?)
  - kinda need to do routing
- implement simple account ledger view
  - tackle routing first? maybe flesh out UI more
- flesh out form cycle:
  - saving state: lock down, wait indicator
  - error feedback (async): unlock
  - on success: unlock, reset form
  - remote sync feedback (maybe completely out-of-channel? can we persistently attach an error condition to a particular document locally?)
- routing / UI framework
- server backend / storage
- picker component?

Framework
---------

- refactoring:
  - decide on directory structure, module system
    - possibly a build system to glue it together
    - port livescript to ?
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

Optimization
------------

- change `db-array` to `db-varhash`?
- figure out where I use plain values or obesrv-values
- thunks

Version 2
=========

- Import
- Recurring
- Reconciliation
