import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';

const { h } = hg;
const { h1, table, thead, tbody, tr, td, th, div, br } = hh(h);
const { panel, abutton } = muihh(h);

const nbsp = String.fromCharCode(160);
const primary = true, raised = true;

export default function(s)
{
  if (!s.loaded)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  return panel([
    table('.mui-table.mui-table--bordered.table-hover.table-clickable.ledger', [
      thead([
        tr([
          th('Post Date'),
          th('Description'),
          th('.mui--text-right', 'Add'),
          th('.mui--text-right', 'Sub'),
        ])
      ]),
      tbody([
        s.xacts.map(x =>
        {
          let cols = Object.entries(x.offsets).map(([aid, o]) => [
              null,
              div('.mui--text-right', s.accts[aid].name),
              div('.mui--text-right', o.add ? (o.add / 100).toFixed(2) : nbsp),
              div('.mui--text-right', o.sub ? (o.sub / 100).toFixed(2) : nbsp),
          ]);
          cols.unshift([
            new Date(x._id.slice(5) * 60000).toLocaleDateString(),
            x.description || nbsp,
            nbsp,
            nbsp,
          ]);
          let rows = cols.reduce((ret, cs, i) =>
          {
            if (i === 1)
            {
              ret = ret.map(x => [x]);
            }

            ret.forEach((x, i) =>
            {
              x.push(cs[i]);
            });

            return ret;
          });
          return tr(
            { 'ev-click': hg.send(s.channels.toXact, { id: x._id.slice(5) }) },
            rows.map(r => td(r)));
        })
      ]),
    ]),
    abutton({ href: '#/xacts/new', accessKey: 'a', primary, raised }, 'Add'),
  ]);
};
