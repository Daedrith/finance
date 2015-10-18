Version 1
=========

Short/medium-term plans
-----------------------

- add README and build instructions
- modularize CSS, get rid of rest of compiled code
- doc edit mode (hidden _id, _rev fields?)
  - kinda need to do routing
- routing
  - query lifecycle: simply adding/removing query observables from a varhash state? or a more explicit state management (ugh, starting to get more stateful)
    - not sure if state having zero listeners 
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

- Rework data layer:
  - Views
    - Put view definitions in their own modules
    - Maybe have some kind of background process to add them?
    - Pass the view into the query observ factories
      - If view not initialized yet, that will be kicked off then
      - We still return the value synchronously, it will be empty until view is populated
        - Maybe figure out some kind of side-channel for status?
  - Manager class (unless I can think of a more FRP way of doing this)
    - Only one change feed subscription to PouchDB, which is then filtered to the observables
      - Figure out feed listener lifecycle
        - Tie it to observ subscription lifecycle?
          - Might be the best; subscriptions should be disposed when removed from the top-level state
            - Will have to be careful about computed observables
        - Create an explicit lifecycle e.g. tied to the router
- channel registration?
  - "API" abstractions?
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
- decide if I want to commit to event sourcing

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
