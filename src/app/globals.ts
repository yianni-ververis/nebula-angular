import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';
import { embed } from '@nebula.js/stardust'
import barChart from '@nebula.js/sn-bar-chart'
import lineChart from '@nebula.js/sn-line-chart'
import pieChart from '@nebula.js/sn-pie-chart'
import sankeyChart from '@nebula.js/sn-sankey-chart'
import funnelChart from '@nebula.js/sn-funnel-chart'
import mekkoChart from '@nebula.js/sn-mekko-chart'

const config = {
  host: 'sense-demo.qlik.com',
  appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',
  webIntegrationId: null,
  // host: 'incognito.us.qlikcloud.com',
  // webIntegrationId: 'jUMqi2hs30peNvVKG4Grd2MI_LdpcpdR',
  // appId: 'eb963d57-f33b-4298-9a04-97903b76201d',
};

const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: 'barChart',
      load: () => barChart,
    },
    {
      name: 'lineChart',
      load: () => lineChart,
    },
    {
      name: 'pieChart',
      load: () => pieChart,
    },
    {
      name: 'sankeyChart',
      load: () => sankeyChart,
    },
    {
      name: 'funneChart',
      load: () => funnelChart,
    },
    {
      name: 'mekkoChart',
      load: () => mekkoChart,
    },
  ],
});

async function getQCSHeaders() {
  const { host, webIntegrationId } = config;
  const response = await fetch(`https://${host}/api/v1/csrf-token`, {
    credentials: 'include',
    headers: { 'qlik-web-integration-id': webIntegrationId },
  });
  if (response.status === 401) {
    const loginUrl = new URL(`https://${host}/login`);
    loginUrl.searchParams.append('returnto', window.location.href);
    loginUrl.searchParams.append('qlik-web-integration-id', webIntegrationId);
    window.location.href = String(loginUrl);
    return undefined;
  }
  const csrfToken = response.headers.get('qlik-csrf-token');
  return {
    'qlik-web-integration-id': webIntegrationId,
    'qlik-csrf-token': csrfToken,
  };
}
const connect = async () => {
  const { host, appId, webIntegrationId } = config;
  let url = `wss://${host}/app/${appId}`
  if (webIntegrationId) {
    const headers = await getQCSHeaders();
    url = `${url}?qlik-web-integration-id=${webIntegrationId}&qlik-csrf-token=${headers['qlik-csrf-token']}`
  }
  console.log(url)
  const enigmaGlobal = await enigma
    .create({
      schema,
      url,
    })
    .open();

  return enigmaGlobal.openDoc(config.appId);
}

export class Globals{
  public static nebulaPromise = async () => {
    const app = await connect();
    return n(app);
  }
}