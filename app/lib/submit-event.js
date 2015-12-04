import hg from 'mercury';

export default hg.BaseEvent((ev, broadcast) =>
{
  // mostly from value-event/submit
  let target = ev.target;
  let isValid = (ev.type === 'submit' && target.tagName === 'FORM') || (ev.type === 'click' && target.tagName === 'BUTTON') || (ev.type === 'click' && target.type === 'submit') || ((target.type === 'text') && (ev.keyCode === ENTER && ev.type === 'keydown'));
  if (!isValid) {
    if (ev.startPropagation) {
      ev.startPropagation();
    }
    return;
  }

  let value = {};
  for (let [k, v] of new FormData(ev.currentTarget).entries())
  {
    value[k] = v;
  }

  let data = extend(value, this.data);
  if (ev.preventDefault) {
    ev.preventDefault();
  }
  broadcast(data);
});
