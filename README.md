[Short description here]

Setup (development)
-------------------

### Prerequisites

- git
- Node.js

### Steps

    git clone https://github.com/daedrith/finance
    cd finance
    npm install
    .\node_modules\.bin\jspm install
    
### Developing

Serve the root of the repo in any static HTTP server.

For example, install `jspm-server`...

    npm install -g jspm-server

...then run with:
    
    jspm-server
    
Browser should open (use `--no-browser` if you don't want `jspm-server` to open it for you). Open the browser console (F12) to see errors.

TODO
----

- Name
- Get from prototyping to working project