import hg from 'mercury';

export default {
  init(params, opts)
  {
    return this.Home();
  },
  render(s)
  {
    return hg.h('h3', 'Hello world');
  },
  dispose(state)
  {
  },
  Home()
  {
    return hg.state({
      title: hg.value('Home')
    });
  }
};