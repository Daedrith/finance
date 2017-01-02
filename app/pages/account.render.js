import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';
import formUtils from '../lib/form-utils';

let {h} = hg;
let { legend, input, br } = hh(h);
let { form, button, select, option } = muihh(h);

let { control: c } = formUtils;

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
    select('Type', { name: 'type', value: d.type, required }, [
      option({ value: 'asset' }, 'Asset'),
      option({ value: 'liability' }, 'Liability'),
      option({ value: 'equity' }, 'Equity'),
      option({ value: 'income' }, 'Income'),
      option({ value: 'expense' }, 'Expense'),
    ]),
    ' ',
    c('Tags', { value: (d.tags || []).join(' ') }),
    br(),
    button({ raised, primary }, d._id ? 'Update' : 'Create'),
  ]);
};
