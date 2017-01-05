import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';
import { capitalize } from 'lodash';

let {h} = hg;
let { h1, table, thead, tbody, tr, td, th, div, strong } = hh(h);
let { panel, abutton, checkbox } = muihh(h);

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

  let types = 'asset liability equity income expense'.split(' ');

  let accts = s.accts;
  if (!s.showAll) accts = accts.filter(a => !a.tags.includes('Hidden'));

  let groups = _.groupBy(accts, 'type');

  return panel([
    table('.mui-table.mui-table--bordered', [
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
            tr('.bg-clickable', { 'ev-click': hg.send(s.channels.toAcct, { id: a._id.slice(5) }) }, [
              td(a.name),
              td(a.tags.join(', ')),
              td('.mui--text-right', ((s.balances[a._id] || 0) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })),
            ])),
          tr(td('.mui--text-right', { colSpan: 3 },
            strong('Total: ' + (groups[t].reduce((bal, a) => bal + (s.balances[a._id] || 0), 0) / 100).toLocaleString('en-US', { minimumFractionDigits: 2 })))),
        ])),
    ]),
    checkbox('Show Hidden', '.mui--pull-right', { name: 'showAll', checked: s.showAll,
      'ev-change': hg.sendChange(s.channels.updateShowAll) }),
    abutton({ href: '#/accounts/new', accessKey: 'a', primary, raised }, 'Add'),
  ]);
};
