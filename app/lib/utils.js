'use strict';

let console = window.console || { log(){} };

export default {
  log: console.log.bind(console),
  trace: console.trace.bind(console),
};
