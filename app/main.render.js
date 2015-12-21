﻿import hg from 'mercury';

import { getPage } from './approuter';

let {h} = hg;

// TODO: module
let a = (text, href, opts) =>
{
  opts = opts ? Object.assign(opts, { href }) : { href };
  return h('a', opts, text);
};

function renderPage(url, pageState)
{
  try
  {
    return getPage(url).render(pageState);
  }
  catch(e)
  {
    return h('pre', e.stack);
  }
}

function renderNav()
{
  // TODO: drive from state
  return h('nav#sidedrawer.mui--no-user-select', [
    h('#sidedrawer-brand.mui--appbar-line-height mui--text-title', 'Finance'),
    h('.mui-divider'),
    h('ul', [
      h('li', [
        h('strong', 'Main'),
        h('ul', [
          h('li', a('Home', '/#')),
        ])
      ]),
      h('li', [
        h('strong', 'Accounts'),
        h('ul', [
          h('li', a('New Account', '#/accounts')),
          h('li', a('Edit Account', '#/accounts/6192115'))
        ])
      ]),
      h('li', [
        h('strong', 'Transactions'),
        h('ul', [
          h('li', a('New Transaction', '#/xacts')),
          h('li', a('Edit Transaction', '#/xacts/6192115'))
        ])
      ]),
    ])
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
            'ev-click': hg.send(chs.toggleSidedrawer)
          }, '☰'),
        h('span.mui--text-title.mui--visible-xs-inline-block', 'Finance'),
        h('span.mui--text-title.mui--hidden-xs', title)
      ])));
}

function renderDebug(s)
{
  let chs = s.channels;
  return h('.mui-row', [
    h('.mui-col-md-6', [
      h('h3', 'Database dump'),
      h('.mui-panel',
        h('pre#dbdump', [
          h('span', ['Listener count: ', ''+s.listenerCount]),
          h('.mui-checkbox',
            h('label', [h('input', { name: 'full-dump', type: 'checkbox', 'ev-change': hg.sendChange(chs.toggleFullDump) }), 'Show full dump'])),
          s.dumpState
            .filter(d => s.showDesignDocs || d._id[0] !== '_')
            .map(d =>
              h('div', [
                JSON.stringify(d, null, 2).replace(/\\n/g, '\n'),
                h('span.del', { 'ev-click': hg.send(chs.docDel, d) })
              ]))
        ])
      )
    ]),
    h('.mui-col-md-6', [
      h('h3', 'Page state dump'),
      h('pre.mui-panel', JSON.stringify(s.pageState, null, 2).replace(/\\n/g, '\n'))
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

  // HACK: manipulating document.title; do outside RAF?
  if (document.title !== (s.pageState.title || "Finance"))
  {
    document.title = s.pageState.title || "Finance";
  }

  let chs = s.channels;
  return h('div', { style: { height: '100%' } }, [
    hg.partial(renderNav),
    hg.partial(renderAppbar, s.pageState.title, chs),
    h('#content-wrapper', [
      h('.mui--appbar-height'),
      h('.mui-container-fluid', [
        hg.partial(renderPage, s.navState.url, s.pageState),

        hg.partial(renderDebug, s),
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
