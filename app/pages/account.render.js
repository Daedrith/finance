import hg from 'mercury';
let {h} = hg;

// TODO: module
let lbl = (n, c, a) => h('label', [n, h(c, a)]);

const required = true;

export default function(s)
{
  if (!s.ready)
  {
    // TODO: overlay or something
    return h('h3', 'Loading...');
  }
  
  let d = s.doc;
  
  return h('form', { 'ev-submit': hg.sendSubmit(s.channels.save) },
    h('fieldset', [
      h('legend', 'Create Account'),
      lbl('Name', 'input', { name: 'name', required, value: d.name }),
      h('button', d._id ? 'Update' : 'Create')
    ]));
};