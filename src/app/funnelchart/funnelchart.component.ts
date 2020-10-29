import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funnelchart',
  templateUrl: './funnelchart.component.html',
  styleUrls: ['./funnelchart.component.css']
})
export class FunnelchartComponent implements OnInit {

  constructor() { }

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'funneChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
        ],
        qMeasures: [
          { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
        ],
        qInterColumnSortOrder: [1, 0],
        qInitialDataFetch: [{
          qWidth: 2,
          qHeight: 5000,
        }],
      },
      showTitles: true,
      title: 'Funnel-chart',
      subtitle: 'Sample supernova funnelchart',
      footnote: 'Case Owner Group / Avg([Case Duration Time])',
    },
    style: {
      width: '100%',
      height: '600px',
      paddingTop: '100px'
    }
  };

  ngOnInit(): void {
  }

}
