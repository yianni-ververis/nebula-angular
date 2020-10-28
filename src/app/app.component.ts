import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	viz1 = {
    type: 'selections',
    style: {
      width: '100%',
      paddingTop: '50px'
    }
  };

	viz2 = {
    type: 'barChart',
    properties: {
      qHyperCubeDef: {
        qDimensions: [
          { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
        ],
        qMeasures: [
          { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
        ],
        qInterColumnSortOrder: [1, 0],
      },
      showTitles: true,
      title: 'Bar-chart',
      subtitle: 'Sample supernova barchart',
      footnote: 'Case Owner Group / Avg([Case Duration Time])',
    },
    style: {
      width: '100%',
      height: '400px',
      paddingTop: '100px'
    }
  };

  title = 'nebula-angular';
}
