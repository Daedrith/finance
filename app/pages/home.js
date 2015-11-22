import hg from 'mercury';

export default {
  init(params, opts)
  {
    let { async } = opts;
    let state = this.Home();
    return async ? Promise.resolve(state) : state;
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
    });
  }
};