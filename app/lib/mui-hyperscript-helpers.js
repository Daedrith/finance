let argsHelper = (css, props, children) =>
{
  if (children) return { css, props, children };

  // TODO: more checks
  if (Array.isArray(props))
  {
    children = props;
    props = {};
  }
  
  if (Array.isArray(css))
  {
    children = css;
    css = '';
  }
  else if (typeof css === 'object') // TODO: figure out if content or props
  {
    children = props;
    props = css;
    css = '';
  }

  css = css || '';
  props = props || {};

  return { css, props, children };
};

let breakpoints = 'xs sm md lg xl'.split(' ');

// TODO: refactor to return new object(s)?
// TODO: need special handling for ev- props? (only create if truthy?)
let rmProp = (obj, prop) =>
{
  let val = obj[prop];
  delete obj[prop];
  return val;
};

let rmProps = (obj, props) => (typeof props === 'string'
  ? props.split(' ')
  : props).map(rmProp.bind(obj));

let splitProps = (obj, props) => (typeof props === 'string'
  ? props.split(' ')
  : props).reduce(
      (newProps, prop) =>
      {
        newProps[prop] = rmProp(obj, prop);
        return newProps;  
      },
      {});

let components = {
  appbar: true,
  // TODO: direct ripple support?
  button: { _: 'button.mui-btn', _options: 'raised flat fab primary danger accent' },
  caret: 'span.mui-caret',
  checkbox: (h, lbl, css, props) =>
  {
    ({css, props} = argsHelper(css, props));
    let inputProps = splitProps(props, 'type autoFocus checked disabled form name required value ev-change');
    return h(css + '.mui-checkbox', props, [
      h('label', [
        h('input', Object.assign({ type: 'checkbox' }, inputProps)),
        lbl
      ]),
    ]);
  },
  col: (h, css, props, children) =>
  {
    ({css, props, children} = argsHelper(css, props, children));

    for (let i = 0; i < breakpoints.length; i++)
    {
      let bp = breakpoints[i];
      if (props[bp])
      {
        css += `.mui-col-${bp}-${props[bp]}`;
        delete props[bp];
      }

      if (props[bp + 'Offset'])
      {
        css += `.mui-col-${bp}-offset-${props[bp + 'Offset']}`;
        delete props[bp + 'Offset'];
      }
    }

    return h(css, props, children);
  },
  container: { _: '.mui-container', fluid: '.mui-container-fluid' },
  divider: true,
  dropdown: (h, labelOrButton, css = '', props = {}, children = []) => h('.mui-dropdown' + css, [
    typeof labelOrButton === 'string'
      ? h('button.mui-btn.mui-btn--primary', { 'data-mui-toggle': 'dropdown' }, [
          labelOrButton,
          h('span.mui-caret'),
        ])
      : labelOrButton,
    h('ul.mui-dropdown__menu' + (rmProp(props, 'menuAlign') === 'right' ? '.mui-dropdown__menu--right' : ''),
      children),
  ]),
  dropdownItem: (h, css, props, children) =>
  {
    ({css, props, children} = argsHelper(css, props, children));
    let [link, target, value, onClick] = rmProps(props, 'link target value onClick');
    return h('li' + css, props,
      h('a', { href: link, target, 'data-mui-value': value, 'ev-click': onClick },
        children));
  },
  form: { _: 'form', inline: '.mui-form--inline' },
  // skipping input
  option: 'option',
  panel: true,
  radio: (h, lbl, css, props) =>
  {
    ({css, props} = argsHelper(css, props));
    let inputProps = splitProps(props, 'type autoFocus checked disabled form name required value ev-change');
    return h(css + '.mui-radio', props, [
      h('label', [
        h('input', Object.assign({ type: 'radio' }, inputProps)),
        lbl
      ]),
    ]);
  },
  row: true,
  select: (h, lbl, css, props, children) =>
  {
    ({css, props, children} = argsHelper(css, props, children));
    let inputProps = splitProps(props, 'readOnly value ev-change ev-mousedown ev-click ev-focus');
    return h('.mui-select', props, [
      h('select', inputProps, children),
      typeof lbl === 'string'
        ? h('label', lbl)
        : lbl,
    ]);
  },
  // TODO: tabs
  // skipping text-field and textarea?
};

// TODO: export

let stringToFunc = (h, comp) => (css, ...rest) =>
{
  if (typeof css === 'string')
  {
    if (css[0] === '.' || css[0] === '#')
    {
      return h(comp + css, ...rest);
    }
    else if (rest.length && comp[0] === '.')
    {
      return h(css + comp, ...rest);
    }
  }

  return h(comp, css, ...rest);
};

export default function(h)
{
  return Object.keys(components).reduce((exportFns, name) =>
  {
    let comp = components[name];
    switch (typeof comp)
    {
      case 'string':
        exportFns[name] = stringToFunc(h, comp);
        break;
      case 'function':
        exportFns[name] = comp.bind(null, h);
        break;
      case 'boolean':
        exportFns[name] = stringToFunc(h, '.mui-' + name);
        break;
      case 'object':
        if (comp._options)
        {
          let optPrefix = comp._.match(/(\.[\w-]+)/)[1] + '--';
          comp._options.split(' ').forEach(k => comp[k] = optPrefix + k);
          delete comp._options;
        }

        exportFns[name] = (css, props, children) =>
        {
          ({css, props, children} = argsHelper(css, props, children));

          let cssPrefix = comp._;
          Object.keys(comp).forEach(k =>
          {
            if (k !== '_' && props[k])
            {
              cssPrefix += comp[k];
            }
          });

          return h(cssPrefix + css, props, children);
        };
        break;
    }

    return exportFns;
  }, {});
}