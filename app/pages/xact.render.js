import hg from 'mercury';

import formUtils from '../lib/form-utils';
import submitEv from '../lib/submit-event';

let {h} = hg;

let { control: c } = formUtils;

const required = true, placeholder = true;

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
    c('Create Date', { type: 'datetime-local', style: { 'padding-top': '15px' } }),
    c('Status', h('.mui-select', h('select', { name: 'status', value: d.status },
      'verified'.split(' ').map(v => h('option', { value: v }, v))
    ))),
    h('.mui-row', [
      h('.mui-col-md-8', 'Account'),
      h('.mui-col-md-2', 'Add'),
      h('.mui-col-md-2', 'Sub'),
    ]),
    s.offsets.map((o, index) => h('.mui-row', { 'ev-event': hg.sendChange(s.channels.updateOffset, { index })}, [
      h('.mui-col-md-8', c('Account', { name: 'acct', required, placeholder, attributes: { list: 'accts' }, value: o.acct.name })),
      h('.mui-col-md-2', c('Add', { type: 'number', step: 0.01, placeholder, value: o.add })),
      h('.mui-col-md-2', c('Sub', { type: 'number', step: 0.01, placeholder, value: o.sub })),
    ])),
    h('button.mui-btn.mui-btn--raised', d._id ? 'Update' : 'Create'),

    h('datalist#accts',
      Object.values(s.accts).map(a => h('option', { value: a.name }))),
  ]);
};
