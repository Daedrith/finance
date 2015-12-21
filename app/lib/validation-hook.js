export default class ValidationHook
{
  constructor(message)
  {
    this.message = message;
  }
  hook(node, prop)
  {
    if (node.validationMessage !== this.message) node.setCustomValidity(this.message);
  }
};
