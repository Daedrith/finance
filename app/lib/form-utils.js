import hg from 'mercury';

let {h} = hg;

export default {
  labeledControl(label, controlTag, attributes)
  {
    if (controlTag && controlTag.type === "VirtualNode")
    {
      return h('.mui-textfield', [controlTag, h('label', label)]);
    }

    if (!attributes)
    {
      attributes = controlTag;
      controlTag = 'input';
    }

    if (!attributes.name)
    {
      attributes.name = label[0].toLowerCase() + label.substr(1).replace(/ +/g, '');
    }

    if (!attributes.type)
    {
      attributes.type = 'input';
    }

    return h('.mui-textfield', [h(controlTag, attributes), h('label', label)])
  },
  placeholderControl(label, controlTag, attributes)
  {
    if (controlTag && controlTag.type === "VirtualNode")
    {
      return h('.mui-textfield', [controlTag, h('label', label)]);
    }

    if (!attributes)
    {
      attributes = controlTag;
      controlTag = 'input';
    }

    if (!attributes.name)
    {
      attributes.name = label[0].toLowerCase() + label.substr(1).replace(/ +/g, '');
    }

    if (!attributes.type)
    {
      attributes.type = 'input';
    }

    attributes.placeholder = label;

    return h('.mui-textfield', h(controlTag, attributes))
  },
};
