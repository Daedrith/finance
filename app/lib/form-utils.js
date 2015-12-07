import hg from 'mercury';

let {h} = hg;

let wrapField = (label, contents, hasPlaceholder) =>
{
  return h('.mui-textfield', hasPlaceholder ? contents : [contents, h('label', label)]);
};

export default {
  wrapField,
  control(label, tag, attributes)
  {
    if (tag && tag.type === "VirtualNode")
    {
      return wrapField(label, tag, attributes);
    }

    if (!attributes)
    {
      attributes = tag;
      tag = 'input';
    }

    if (!attributes.name) attributes.name = label[0].toLowerCase() + label.substr(1).replace(/ +/g, '');

    if (!attributes.type) attributes.type = 'text';

    if (typeof attributes.value === 'function' && attributes.value.set)
    {
      // TODO: use just ev-change?
      // TODO: let user supply a channel instead
      attributes['ev-event'] = hg.sendChange(d => attributes.value.set(d[attributes.name]));
      attributes.value = attributes.value();
    }

    if (attributes.placeholder === true) attributes.placeholder = label;

    return wrapField(label, h(tag, attributes), attributes.placeholder);
  }
};
