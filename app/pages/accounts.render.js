import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';
import { capitalize } from 'lodash';

let {h} = hg;
let { h1, table, thead, tbody, tr, td, th, div, strong } = hh(h);
let { panel, abutton } = muihh(h);

// TODO: module
let lbl = (n, c, a) => h('.mui-textfield', [h(c, a), h('label', n)]);

const required = true, primary = true, raised = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  let groups = _.groupBy(s.accts, 'type');
  let types = 'asset liability equity income expense'.split(' ');

  return panel([
    table('.mui-table.mui-table--bordered.table-hover.table-clickable', [
      thead([
        tr([
          th('Account Name'),
          th('Tags'),
          th('.mui--text-right', 'Balance'),
        ])
      ]),
      types.map(t => !(t in groups) ? null :
        tbody([
          tr(td({ colSpan: 3 }, strong('Type: ' + _.capitalize(t)))),
          groups[t].map(a =>
            tr({ 'ev-click': hg.send(s.channels.toAcct, { id: a._id.slice(5) }) }, [
              td(a.name),
              td(a.tags.join(', ')),
              td('.mui--text-right', ((s.balances[a._id] || 0) / 100).toFixed(2)),
            ])),
          tr(td('.mui--text-right', { colSpan: 3 },
            strong('Total: ' + (groups[t].reduce((bal, a) => bal + (s.balances[a._id] || 0), 0) / 100).toFixed(2)))),
        ])),
    ]),
    abutton({ href: '#/accounts/new', accessKey: 'a', primary, raised }, 'Add'),
  ]);
};
