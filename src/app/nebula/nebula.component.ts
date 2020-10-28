import { Component, OnInit, ElementRef, Input } from '@angular/core';
import enigma from 'enigma.js';
import schema from 'enigma.js/schemas/12.170.2.json';
import { embed } from '@nebula.js/stardust'
import barChart from '@nebula.js/sn-bar-chart'

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
  ],
});

@Component({
  selector: 'nebula',
  template: ``,
  styles: []
})

export class NebulaComponent implements OnInit {

	@Input() type: string;
	@Input() properties: object;

  constructor(private elementRef: ElementRef) { }

  connect = async () => {
    const enigmaGlobal = await enigma
      .create({
        schema,
        url: `wss://${config.host}/app/${config.appId}`,
      })
      .open();
  
    return enigmaGlobal.openDoc(config.appId);
  }

  nebulaPromise = async () => {
    const app = await this.connect();
    return n(app);
  }

  init = async () => {
    const nebula = await this.nebulaPromise();
    const { type, properties } = this;
    if (type === 'selections' ) {
      const selections = await nebula.selections();
      selections.mount(this.elementRef.nativeElement);
    } else {
      nebula.render({
        element: this.elementRef.nativeElement,
        type,
        properties
      })
    }
  }

  ngOnInit() {
    this.init();
  }

}
