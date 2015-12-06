import hg from 'mercury';

import formUtils from '../lib/form-utils';
import submitEv from '../lib/submit-event';

let {h} = hg;

let {
  labeledControl: lbl,
  placeholderControl: pc
} = formUtils; // TODO: auto-values

const required = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return h('form.mui-panel.mui-form--inline', { 'ev-submit': hg.sendSubmit(s.channels.save) }, [ // TODO: figure out multiple element situation
    h('legend', 'Create transaction'),
    lbl('Create Date', { type: 'datetime-local' }),
    lbl('Status', h('.mui-select', h('select', { name: 'status', value: d.status },
      'verified'.split(' ').map(v => h('option', { value: v }, v))
    ))),
    h('.mui-row', [
      h('.mui-col-md-8', 'Account'),
      h('.mui-col-md-2', 'Add'),
      h('.mui-col-md-2', 'Sub'),
    ]),
    s.offsets.map(o => h('.mui-row', [
      h('.mui-col-md-8', pc('Account', 'input', { name: 'from', required, attributes: { list: 'accts' } })),
      h('.mui-col-md-2', pc('Add', 'input', { name: 'amt', type: 'number', step: 0.01, required })),
      h('.mui-col-md-2', pc('Sub', 'input', { name: 'amt', type: 'number', step: 0.01, required })),
    ])),
    h('button.mui-btn.mui-btn--raised', d._id ? 'Update' : 'Create'),

    h('datalist#accts',
      Object.values(s.accts).map(a => h('option', { value: a.name }))),
  ]);
};
