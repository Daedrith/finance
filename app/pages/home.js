import hg from 'mercury';

function Home()
{
  return hg.state({
    title: hg.value('Home')
  });
}

Home.render = (s) => hg.h('h3', 'Hello world');

export default Home;
