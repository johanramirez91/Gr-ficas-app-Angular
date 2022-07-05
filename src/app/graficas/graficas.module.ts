import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonaComponent,
    GraficaBarraComponent,
    DonaHttpComponent,
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule,
    HttpClientModule,
  ],
})
export class GraficasModule {}
