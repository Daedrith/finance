import hg from 'mercury';

import formUtils from '../lib/form-utils';
import submitEv from '../lib/submit-event';

let {h} = hg;

let { labeledControl: lbl } = formUtils;

const required = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return h('form.mui-panel', { 'ev-submit': submitEv(s.channels.save) }, [
    h('legend', 'Create transaction'),
    lbl('Create Date', { type: 'datetime-local' }),
    lbl('Status', h('.mui-select', h('select', { name: 'status', value: 'verified' },
      'verified'.split(' ').map(v => h('option', { value: v }, v))
    ))),
    lbl('From', 'input', { name: 'from', required, attributes: { list: 'accts' } }),
    lbl('To', 'input', { name: 'to', required, attributes: { list: 'accts' } }),
    lbl('Amount', 'input', { name: 'amt', type: 'number', step: 0.01, required }),
    h('button.mui-btn.mui-btn--raised', d._id ? 'Update' : 'Create'),

    h('datalist#accts',
      Object.values(s.accts).map(a => h('option', { value: a.name }))),
  ]);
};
