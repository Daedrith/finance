﻿import hg from 'mercury';
import hh from 'hyperscript-helpers';

import { getPage } from './approuter';

let {h} = hg;
let { span } = hh(h);

// TODO: module
let a = (text, href, opts) =>
{
  opts = opts ? Object.assign(opts, { href }) : { href };
  return h('a', opts, text);
};

function renderPage(navState)
{
  if (!navState.pageRenderer) return h('h3', 'Loading...');

  try
  {
    return navState.pageRenderer(navState.pageObs());
  }
  catch(e)
  {
    console.error(e);
    return h('pre', e.stack);
  }
}

function renderNav()
{
  // TODO: drive from state
  return h('nav#sidedrawer.mui--no-user-select', [
    h('#sidedrawer-brand.mui--appbar-line-height', [
      span('.mui--text-title', 'Finance'),
    ]),
    h('.mui-divider'),
    a('Home', '/#', { accessKey: '1' }),
    a('Accounts', '#/accounts', { accessKey: '2' }),
    a('Ledger', '#/xacts', { accessKey: '3' }),
  ]);
}

function renderAppbar(title, chs)
{
  return h('header#header',
    h('nav.mui-appbar.mui--appbar-line-height',
      h('.mui-container-fluid', [
        //h('a.sidedrawer-toggle.mui--visible-xs-inline-block', '☰'),
        //h('a.sidedrawer-toggle.mui--hidden-xs', {
        h('a.sidedrawer-toggle', {
            accessKey: 'b',
            'ev-click': hg.send(chs.toggleSidedrawer)
          }, '☰'),
        h('span.mui--text-title.mui--visible-xs-inline-block', 'Finance'),
        h('span.mui--text-title.mui--hidden-xs', title),
        h('a.mui--pull-right', {
          title: 'Toggle debug',
          'ev-click': hg.send(chs.toggleDebug),
        }, '~')
      ])));
}

function renderDebug(s)
{
  return h('.mui-row', [
    h('.mui-col-md-12', [
      h('h3', 'Page state dump'),
      h('pre.mui-panel', JSON.stringify(s.navState.pageObs(), null, 2).replace(/\\n/g, '\n'))
    ])
  ]);
}

function renderNotifications(notifications)
{
  return h('.notifcation-container', notifications.map(n =>
    h('.notification', { 'ev-click': n.channels.clicked }, [
      h('.title', n.title),
      h('.body', n.body),
    ])));
}

export default (s) =>
{
  // HACK: MUI looks for this class on the body tag, but our vtree doesn't include it
  let body = document.body;
  if (body.classList.contains('hide-sidedrawer') === s.sidebarVisible)
  {
    body.classList.toggle('hide-sidedrawer');
  }

  // TODO: update title in navigator
  if (document.title !== (s.navState.pageObs().title || "Finance"))
  {
    document.title = s.navState.pageObs().title || "Finance";
  }
  
  let chs = s.channels;
  return h('div', { style: { height: '100%' } }, [
    hg.partial(renderNav),
    hg.partial(renderAppbar, s.navState.pageObs().title, chs),
    h('#content-wrapper', [
      h('.mui--appbar-height'),
      h('.mui-container-fluid', [
        hg.partial(renderPage, s.navState),

        s.showDebug
          ? hg.partial(renderDebug, s)
          : null,
      ])
    ]),
    h('footer#footer',
      h('.mui-container-fluid', [h('br'), 'Work in progress']))
  ]);
}

//j`
//div
//  ${[renderNav]}
//  .flex-container
//    ${hg.partial(renderPage, s.navState)}
//    ${hg.partial(renderForm2, chs)}
//    form
//      datalist#accts
//        ${s.accts.map(a => j`option(value=${a.name})`)}
//  .flex-container
//    pre#dbdump
//      lbl Show full dump
//        input(name=full-dump, type=checkbox, ev-change=#{hg.sendChange(chs.toggleFullDump)})
//      ${s.dumpState
//          .filter(d => s.showDesignDocs || d._id[0] !== '_')
//          .map(d => j`
//            div
//              ${JSON.stringify(d, null, 2).replace(/\\n/g, '\n')}
//              span.del(ev-click=${hg.send(chs.docDel, d)})
//            `)}
//`;
