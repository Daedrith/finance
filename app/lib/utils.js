'use strict';

let console = window.console || { log(){} };

export default {
  log: console.log.bind(console),
  logReject: reason => { console.log(reason); return Promise.reject(reason); },
  trace: console.trace.bind(console),
};
