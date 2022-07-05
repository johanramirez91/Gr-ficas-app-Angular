import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import {
  ChartConfiguration,
  ChartType,
  ChartEvent,
  ChartData,
  Color,
} from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss'],
})
export class DonaHttpComponent implements OnInit {
  public colors: Color[] = ['#007FBA', '#00547A', '#00A9FA'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  constructor(private graficaService: GraficasService) {}

  ngOnInit(): void {
    // this.graficaService.getUsuarios().subscribe((data) => {
    //   this.doughnutChartData.labels = Object.keys(data);
    //   this.doughnutChartData.datasets = [
    //     {
    //       data: Object.values(data),
    //       backgroundColor: this.colors,
    //       hoverOffset: 10,
    //       hoverBackgroundColor: this.colors.reverse(),
    //       hoverBorderColor: this.colors,
    //     },
    //   ];
    // });

    this.graficaService
      .getDataRedesSociales()
      .subscribe(({ labels, values }) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets.push({
          data: values,
          backgroundColor: this.colors,
          hoverOffset: 10,
          hoverBackgroundColor: this.colors.reverse(),
          hoverBorderColor: this.colors,
        });
      });
  }
}
