import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  constructor() { }

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'pieChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
        ],
        qMeasures: [
          { qDef: { qDef: 'Avg([Case Duration Time])' } },
        ],
        qInitialDataFetch: [{
          qWidth: 2,
          qHeight: 100,
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
