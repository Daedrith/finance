import routeMap from 'route-map';
import index from './pages/index';

export let router = (fun, url) =>
{
  if (!(url instanceof URL)) url = new URL(url, document.location.origin);
  
  url = url.hash[1] === '/'
    ? new URL(url.origin + url.hash.slice(1))
    : url;
  
  return fun(url.href);
}.bind(null, routeMap(index));

export let getPage = url => router(url).fn;
