Version 1
=========

Short/medium-term plans
-----------------------

- modularize CSS, get rid of rest of compiled code
- doc edit mode (hidden _id, _rev fields?)
  - kinda need to do routing
- CSS framework
  - Bootcards?
- implement simple account ledger view
  - tackle routing first? maybe flesh out UI more
- flesh out form cycle:
  - saving state: lock down, wait indicator
  - error feedback (async): unlock
  - on success: unlock, reset form
  - remote sync feedback (maybe completely out-of-channel? can we persistently attach an error condition to a particular document locally?)
- server backend / storage
- think of a project name

Framework
---------

- Hot reload: remove imperative code from top-level / main module, or do some custom __hotReload logic
- Rework data layer:
  - Views (of the map/reduce kind)
    - Put view definitions in their own modules
    - Maybe have some kind of background process to add them eagerly?
      - Should be unnecessary, 99% of the time they haven't changed and are already there
      - Should detect if view definition differs from what's in the design doc
    - Pass the view into the query observ factories
      - If view not initialized yet, that will be kicked off then
      - We still return the value synchronously, it will be empty until view is populated
        - Maybe figure out some kind of side-channel for status?
  - Manager class
    - Doesn't feel very functional / FRP
    - Rewrite other observable adapters to latest convention
    - Querying API?
  - Future: rewind/fast-forward
- CSS framework
  - bootstrap cards? MUI?
  - think about overall UI (cards are attractive; perhaps even avoid modal UIs? interesting conflict resolution)
- Turn label helper function into labelled control component?
  - Might be a first easy step into components

- tagged template function for creating vdom nodes... jade-like syntax?
- form generation?
  - form component for better composition?
  - validation
    - html5 validation rocks. However, need to think about errors down the line (e.g. local-db error, remote db error). Command-Query Separation tells us that the command should be fire-and-forget, and... (forgot what I was going to write here)
  - would need a schema system... probably overkill for now

Views
-----

- top level view
  - navigation, notifications, etc.
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

- figure out where I use plain values or obesrv-values
- thunks

Version 2
=========

- Import
- Recurring
  - Interest rate calculation
- Reconciliation

Wishlist
========

- Signal graph visualizer for observables
- Type annotations?
