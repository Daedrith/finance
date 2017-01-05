import hg from 'mercury';
import hh from 'hyperscript-helpers';
import { KeyValue } from 'observ-pouchdb';
import muihh from '../lib/mui-hyperscript-helpers';
import { control as c } from '../lib/form-utils';

import { syncState, startSync, stopSync } from '../sync';1
import { appDb } from '../appdb';

let { h } = hg;
let { legend, span } = hh(h);
let { panel, form, row, col, button, abutton, checkbox } = muihh(h);

const disabled = true, raised = true, primary = true, danger = true;

function Home(opts, disposeSignal)
{
  let syncConfig = KeyValue('_local/sync_config', disposeSignal, {
    defaultDoc: { _id: '_local/sync_config' }
  });

  return hg.state({
    title: hg.value('Home'),
    ready: syncConfig.ready,
    syncConfig,
    syncState,
    exporting: hg.value(false),
    channels: {
      update(s, form)
      {
        s.syncConfig.set({ ...s.syncConfig(), ...form });
      },
      apply(s, form)
      {
        appDb.put({ ...s.syncConfig(), ...form });
      },
      startSync() { startSync(); },
      stopSync() { stopSync(); },
      export(s)
      {
        s.exporting.set(true);
        appDb.allDocs({ include_docs: true }).then(docs =>
        {
          s.exporting.set(false);
          let blob = new Blob([JSON.stringify(docs)], { type: 'application/json' });
          let url = URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'db.json';
          document.body.appendChild(a);
          a.click();
          setTimeout(() =>
          {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }, 0);
        });
      }
    }
  });
}

Home.render = (s) =>
{
  if (!s.ready.yet) return h('h3', 'Loading...');

  return row([
    col({ md: 6 }, [
      panel(
        form([
          legend('Sync State'),
          c('Remote DB Url', 'input', { value: s.syncState.remoteUrl, disabled }),
          checkbox('Online', { disabled, checked: s.syncState.online }),
          c('Last Error', 'input', { value: s.syncState.lastError, disabled }),
          span([
            button({ raised, primary, disabled: s.syncState.online, 'ev-click': hg.sendClick(s.channels.startSync, undefined, { preventDefault: true }) }, 'Start Sync'),
            ' ',
            button({ raised, danger, disabled: !s.syncState.online, 'ev-click': hg.sendClick(s.channels.stopSync, undefined, { preventDefault: true }) }, 'Stop Sync'),
          ])
        ])
      ),
      panel(
        abutton({ raised, disabled: s.exporting, 'ev-click': hg.send(s.channels.export) }, 'Export')
      )
    ]),
    col({ md: 6 },
      panel(
        form({ 'ev-event': hg.sendChange(s.channels.update), 'ev-submit': hg.sendSubmit(s.channels.apply) }, [
          legend('Sync Settings'),
          c('Remote DB Url', 'input', { name: 'remoteUrl', value: s.syncConfig.remoteUrl }),
          checkbox('Enable sync', { name: 'enabled', checked: s.syncConfig.enabled }),
          button({ raised, primary }, 'Apply'),
    ]))),
  ]);
};

export default Home;
