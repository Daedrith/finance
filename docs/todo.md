Version 1
=========

Short/medium-term plans
-----------------------

- add README and build instructions
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
    - Only one change feed subscription to PouchDB, which is then filtered to the observables
      - Might be premature optimization; either test or look at source code
  - Future: rewind/fast-forward
- Routing
  - Component-based pages... page components... PCs
    - they're not really "components" in the mercury sense anymore
    - Since components have an init function, we can construct the state object with the proper observables
    - Unfortunately, our signal that the (nested) pdb-observables are no longer needed is when the component itself is no longer being observed... perhaps have to explicitly dispose
    - First of all, should decide whether PCs should manage their subscriptions directly, or they're just given the value they edit, and a higher level of abstraction manages query/persistence
      - PCs end up being tightly coupled to the app/query manager singletons
      - Probably do it the simpler/perhaps more unclean way for now, try to refactor later
    - Interface:
      - Should make PCs server-friendly
      - static load instead?
        - Does this solve parameterization?
        - It seems like this would just go in a different module? the routing scheme?
          - resource alloc and dispose in separate modules :| but maybe I can make disposal automatic enough?
          - simplifying the number of modules is good, too, though
      - (construction): seems mostly just internally useful
      - state: the (observable) to put in the app state
      - ready: optional promise for async initialization
        - don't like this... no use for a partially initialized object, other than to call bugs; really want async factory...
      - dispose: optional method
        - tempting to make this dynamic, but can do so later
      - focus/blur?
  - For the typical "form" PC, is it wise to render directly from the db query?
    - probably not in "edit" mode
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
  - History stack
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
