import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';
import { control as c } from '../lib/form-utils';

let {h} = hg;
let { legend, input, br } = hh(h);
let { form, button, select, option } = muihh(h);

const required = true, primary = true, raised = true, inline = true, autofocus = true;

export default function(s)
{
  if (!s.loaded)
  {
    // TODO: overlay or something
    // TODO: potentially move this concern outside the page's render code
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return form('.mui-panel', { inline, 'ev-submit': hg.sendSubmit(s.channels.save) }, [
    legend((d._id ? 'Update' : 'Create') + ' Account'),
    c('Name', { value: d.name, autofocus, required }),
    ' ',
    select('Type', { name: 'type', value: d.type, required, options: {
      asset: 'Asset',
      liability: 'Liability',
      equity: 'Equity',
      income: 'Income',
      expense: 'Expense',
    }}),
    ' ',
    c('Tags', { value: (d.tags || []).join(' ') }),
    br(),
    button({ raised, primary }, d._id ? 'Update' : 'Create'),
  ]);
};
