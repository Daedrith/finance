import hg from 'mercury';
import hh from 'hyperscript-helpers';
import muihh from '../lib/mui-hyperscript-helpers';

let {h} = hg;
let { legend } = hh(h);
let { panel, button } = muihh(h);

// TODO: module
let lbl = (n, c, a) => h('.mui-textfield', [h(c, a), h('label', n)]);

const required = true, primary = true, raised = true;

export default function(s)
{
  if (!s.loaded)
  {
    // TODO: overlay or something
    // TODO: potentially move this concern outside the page's render code
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return panel('form', { 'ev-submit': hg.sendSubmit(s.channels.save) }, [
    legend((d._id ? 'Update' : 'Create') + ' Account'),
    lbl('Name', 'input', { name: 'name', required, value: d.name }),
    button({ raised, primary }, d._id ? 'Update' : 'Create'),
  ]);
};
