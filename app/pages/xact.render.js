import hg from 'mercury';
import hh from 'hyperscript-helpers';
import { capitalize } from 'lodash';

import muihh from '../lib/mui-hyperscript-helpers';
import { control as c } from '../lib/form-utils';
import submitEv from '../lib/submit-event';

let {h} = hg;
let { input, label } = hh(h);
let { select, button, abutton, panel } = muihh(h);

const required = true, placeholder = true, autofocus = true;
const raised = true, flat = true, primary = true, danger = true;
const mt15 = { marginTop: '15px' };
const lblClass = '.mui--text-dark-secondary.mui--text-caption';

export default function(s)
{
  if (!s.loaded)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  if (d == null)
  {
    return panel('.mui--text-center', 'Transaction not found; it may have been deleted.');
  }

  return h('form.mui-panel.mui-form--inline',
      { 'ev-submit': hg.sendSubmit(s.channels.save), 'ev-event': hg.sendChange(s.channels.update) }, [ // TODO: figure out multiple element situation
    h('legend', (d._id ? 'Edit' : 'New') + ' transaction'),
    c('Post Date', { type: 'datetime-local', valueAsNumber: s.postDate, accessKey: 'e', disabled: d._id, required, style: mt15 }),
    h('.spacer'),
    select('Status', { name: 'status', value: d.status, options: {
      verified: 'Verified',
      predicted: 'Predicted',
    }}),
    h('br'),
    h('.mui-textfield', { style: { width: '100%' } }, [
      input({ name: 'description', value: d.description, accessKey: 'd', type: 'text', autofocus, required, attributes: { list: 'descs' } }),
      label('Description'),
    ]),
    h('.mui-row.grid-headers', [
      h('.mui-col-md-8', label(lblClass, 'Account')),
      h('.mui-col-md-2', label(lblClass, 'Add')),
      h('.mui-col-md-2', label(lblClass, 'Sub')),
    ]),
    s.offsets.map((o, index) =>
      h('.mui-row', { key: o.key, 'ev-event': hg.sendChange(s.channels.updateOffset, { index }) }, [
        h('.mui-col-md-8', c('Account',
          { name: 'acct', placeholder, list: 'accts', value: o.acct.name, field: o.acctField,
          'ev-blur': hg.send(s.channels.autoPickAccount, { index }) })),
        h('.mui-col-md-2', c('Add', { type: 'number', step: 0.01, placeholder, value: o.add, field: o.addField })),
        h('.mui-col-md-2', c('Sub', { type: 'number', step: 0.01, placeholder, value: o.sub, field: o.subField })),
      ])),
    button({ primary, raised, disabled: s.saving }, d._id ? 'Update' : 'Create'),
    d._id ? abutton({ flat, danger, 'ev-click': hg.sendClick(s.channels.delete) }, 'Delete') : null,

    h('datalist#accts',
      Object.values(s.accts).map(a => h('option', { value: a.name }, capitalize(a.type)))),
    h('datalist#descs',
      Object.values(s.descriptions).map(d => h('option', { value: d }))),
  ]);
};
