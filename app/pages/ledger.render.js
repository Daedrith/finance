import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';

let {h} = hg;
let { h1, table, thead, tbody, tr, td, th, div } = hh(h);
let { panel } = muihh(h);

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  return div([
    panel(table('.mui-table.table-hover.table-clickable', [
      thead([
        tr([
          th('Post Date'),
          th('Description'),
          th('.mui--text-right', 'Add'),
          th('.mui--text-right', 'Sub'),
        ])
      ]),
      tbody([
        s.xacts.map(x => [
          tr({ 'ev-click': hg.send(s.channels.toXact, { id: x._id.slice(5) }) }, [
            td(new Date(x._id.slice(5)).toLocaleDateString()),
            td(x.desc),
            td(),
            td(),
          ]),
          Object.entries(x.offsets).map(([aid, o]) =>
            tr({ 'ev-click': hg.send(s.channels.toXact, { id: x._id.slice(5) }) }, [
              td(),
              td('.mui--text-right', s.accts[aid]),
              td('.mui--text-right', o.add ? (o.add / 100).toFixed(2) : ''),
              td('.mui--text-right', o.sub ? (o.sub / 100).toFixed(2) : ''),
          ])),
        ])
      ]),
    ])),
  ]);
};
