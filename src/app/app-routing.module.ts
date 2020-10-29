import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { BarchartComponent } from './barchart/barchart.component'
import { FunnelchartComponent } from './funnelchart/funnelchart.component'
import { LinechartComponent } from './linechart/linechart.component'
import { MekkochartComponent } from './mekkochart/mekkochart.component'
import { PiechartComponent } from './piechart/piechart.component'
import { SankeychartComponent } from './sankeychart/sankeychart.component'

const routes: Routes = [
  { path: 'barchart', component: BarchartComponent },
  { path: 'funnelchart', component: FunnelchartComponent },
  { path: 'linechart', component: LinechartComponent },
  { path: 'mekkochart', component: MekkochartComponent },
  { path: 'piechart', component: PiechartComponent },
  { path: 'sankeychart', component: SankeychartComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
