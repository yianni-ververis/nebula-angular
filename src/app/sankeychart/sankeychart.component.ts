import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sankeychart',
  templateUrl: './sankeychart.component.html',
  styleUrls: ['./sankeychart.component.css']
})
export class SankeychartComponent implements OnInit {

  constructor() { }

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'sankeyChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
          { qDef: { qFieldDefs: ['Priority'] }, qNullSuppression: true },
        ],
        qMeasures: [
          { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
        ],
        qInterColumnSortOrder: [2, 0, 1],
        qInitialDataFetch: [{
          qWidth: 3,
          qHeight: 3000,
        }],
      },
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
