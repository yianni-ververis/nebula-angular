import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NebulaComponent } from './nebula/nebula.component';
import { BarchartComponent } from './barchart/barchart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FunnelchartComponent } from './funnelchart/funnelchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { MekkochartComponent } from './mekkochart/mekkochart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { SankeychartComponent } from './sankeychart/sankeychart.component';

@NgModule({
  declarations: [
    AppComponent,
    NebulaComponent,
    BarchartComponent,
    HeaderComponent,
    HomeComponent,
    FunnelchartComponent,
    LinechartComponent,
    MekkochartComponent,
    PiechartComponent,
    SankeychartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
