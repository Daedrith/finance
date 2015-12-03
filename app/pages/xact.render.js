import hg from 'mercury';

let {h} = hg;

// TODO: module
let lbl = (n, c, a) => h('.mui-textfield', [h(c, a), h('label', n)]);

const required = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }

  let d = s.doc;

  return h('form', { 'ev-submit': hg.sendSubmit(s.channels.save) }, [
    h('.mui-panel', [
      h('legend', 'Create transaction'),
      lbl('From', 'input', { name: 'from', required, attributes: { list: 'accts' } }),
      lbl('To', 'input', { name: 'to', required, attributes: { list: 'accts' } }),
      lbl('Amount', 'input', { name: 'amt', type: 'number', step: 0.01, required }),
      h('button.mui-btn.mui-btn--raised', d._id ? 'Update' : 'Create'),

      h('datalist#accts',
        Object.values(s.accts).map(a => h('option', { value: a.name })))
    ])
  ]);
};
