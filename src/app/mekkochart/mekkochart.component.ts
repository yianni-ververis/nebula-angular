import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mekkochart',
  templateUrl: './mekkochart.component.html',
  styleUrls: ['./mekkochart.component.css']
})
export class MekkochartComponent implements OnInit {

  constructor() { }

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'mekkoChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] } },
          { qDef: { qFieldDefs: ['Priority'] } },
        ],
        qMeasures: [
          { qDef: { qDef: '=Count([Case Is Closed])' } },
        ],
        qInterColumnSortOrder: [2, 0, 1],
        qInitialDataFetch: [{
          qWidth: 3,
          qHeight: 100,
        }],
      },
      showTitles: true,
      title: 'Mekko-chart',
      subtitle: 'Sample supernova mekkochart',
      footnote: '',
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
