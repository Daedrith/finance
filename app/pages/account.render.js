import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';

let {h} = hg;
let { h1, table, thead, tbody, tr, td, th, div } = hh(h);
let { panel } = muihh(h);

// TODO: module
let lbl = (n, c, a) => h('.mui-textfield', [h(c, a), h('label', n)]);

const required = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return div([
    h1('Account List'),
    panel(table('.mui-table', [
      thead([
        tr([
          th('Account Name'),
          th('Balance'),
        ])
      ]),
      tbody([

      ]),
    ])),
  ]);
};
