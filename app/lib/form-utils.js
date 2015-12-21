import hg from 'mercury';

import ValidationHook from './validation-hook';

let {h} = hg;

let wrapField = (label, contents, hasPlaceholder) =>
{
  return h('.mui-textfield', hasPlaceholder ? contents : [contents, h('label', label)]);
};

export default {
  wrapField,
  control(label, tag, props)
  {
    if (tag && tag.type === "VirtualNode")
    {
      return wrapField(label, tag, props);
    }

    if (!props)
    {
      props = tag;
      tag = 'input';
    }

    if (!props.name) props.name = label[0].toLowerCase() + label.substr(1).replace(/ +/g, '');

    if (!props.type) props.type = 'text';

    if (typeof props.value === 'function' && props.value.set)
    {
      // TODO: use just ev-change?
      // TODO: let user supply a channel instead
      // TODO: or just delete this, because I doubt we'll ever pass an observable here
      props['ev-event'] = hg.sendChange(d => props.value.set(d[props.name]));
      props.value = props.value();
    }

    if (props.placeholder === true) props.placeholder = label;

    // TODO: list of props to move to attributes
    if (typeof props.list === 'string')
    {
      let attrs = props.attributes || (props.attributes = {});
      attrs.list = props.list;
      delete props.list;
    }

    if (props.field)
    {
      let field = props.field;
      delete props.field;
      if (field.disabled != null) props.disabled = field.disabled;
      if (field.error != null) props.customError = new ValidationHook(field.error);
    }

    return wrapField(label, h(tag, props), props.placeholder);
  }
};
