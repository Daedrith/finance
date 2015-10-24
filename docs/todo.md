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
  - Views (of the map/reduce kind)
    - Put view definitions in their own modules
    - Maybe have some kind of background process to add them eagerly?
      - Should be unnecessary, 99% of the time they haven't changed and are already there
      - Should detect if view definition differs from what's in the design doc
    - Pass the view into the query observ factories
      - If view not initialized yet, that will be kicked off then
      - We still return the value synchronously, it will be empty until view is populated
        - Maybe figure out some kind of side-channel for status?
  - Manager class (unless I can think of a more FRP way of doing this)
    - Only one change feed subscription to PouchDB, which is then filtered to the observables
      - Might be premature optimization; either test or look at source code
- Separate app init module, with custom __hotReload function?
  - Worse case, we store some references as global variables
- Routing
  - Component-based pages
    - Since components have an init function, we can construct the state object with the proper observables
    - Unfortunately, our signal that the (nested) pdb-observables are no longer needed is when the component itself is no longer being observed... perhaps have to explicitly dispose
    - Interface:
      - (construction): normal component instantiation
      - ready: optional promise for async initialization
      - dispose: optional method
      - focus/blur?
  - Figure out async navigation
    - User clicks a link, we start loading the requested component
      - Component might be created, but also need to know when all of its dependent data (or at least the data we want to have for the initial render) is ready
      - Fade in overlay? Or a non-modal indicator
    - Route changes
      - Keep a (limited) stack of previous pages? Useful for non-persisted page state, e.g. state of filters
    - If user presses escape, or navigates somewhere else, cancel first navigation
    - Could be fancy with transitions, but entirely unnecessary
  - Figure out parameterization
    - e.g. /foo/:id/edit
    - import foo/index first, discover routes
    - put off to later; can just use querystring for now
- channel registration? Probably solved by component-based pages
- CSS framework
  - bootstrap cards?
  - think about overall UI (cards are attractive; perhaps even avoid modal UIs? interesting conflict resolution)
- Turn label helper function into labelled control component?
  - Might be a first easy step into 

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
