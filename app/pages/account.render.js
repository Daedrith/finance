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

  return h('form.mui-panel', { 'ev-submit': hg.sendSubmit(s.channels.save) }, [
    h('legend', (d._id ? 'Update' : 'Create') + ' Account'),
    lbl('Name', 'input', { name: 'name', required, value: d.name }),
    h('button.mui-btn.mui-btn--raised', d._id ? 'Update' : 'Create')
  ]);
};
