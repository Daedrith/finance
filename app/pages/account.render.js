import hg from 'mercury';
let {h} = hg;

// TODO: module
let lbl = (n, c, a) => h('label', [n, h(c, a)]);

const required = true;

export default function(s)
{
  d = s.doc;
  return h('form', { 'ev-submit': hg.sendSubmit(chs.acctAdd) },
    h('fieldset', [
      h('legend', 'Create Account'),
      lbl('Name', 'input', { name: 'name', required, value: d.name }),
      h('button', d._id ? 'Update' : 'Create')
    ]));
};