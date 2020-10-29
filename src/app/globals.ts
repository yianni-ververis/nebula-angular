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

const connect = async () => {
  const enigmaGlobal = await enigma
    .create({
      schema,
      url: `wss://${config.host}/app/${config.appId}`,
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