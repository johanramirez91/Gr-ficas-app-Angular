import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartEvent, ChartType, ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.scss'],
})
export class GraficaBarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() horizontal: boolean = false;

  @Input() barChartData!: ChartData;
  // {
  //   // labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   // datasets: [
  //   //   {
  //   //     data: [65, 59, 80, 81, 56, 55, 40],
  //   //     label: 'Series A',
  //   //     backgroundColor: '#FFC107',
  //   //     hoverBackgroundColor: '#FFF120',
  //   //   },
  //   //   {
  //   //     data: [28, 48, 40, 19, 86, 27, 90],
  //   //     label: 'Series B',
  //   //     backgroundColor: '#03A9F4',
  //   //     hoverBackgroundColor: '#00DDFB',
  //   //   },
  //   //   {
  //   //     data: [35, 65, 25, 45, 86, 95, 90],
  //   //     label: 'Series C',
  //   //     backgroundColor: '#4CAF50',
  //   //     hoverBackgroundColor: '#05E334',
  //   //   },
  //   // ],
  // };

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: 'x',
  };
  public barChartType: ChartType = 'bar';

  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartOptions!.indexAxis = 'y';
    }
  }
}
