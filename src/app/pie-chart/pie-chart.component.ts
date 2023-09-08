import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions ={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Daily Order Analysis',
          align: 'center'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
              name: 'Biriyani',
              y: 28.67,
              
          }, {
              name: 'Alfam',
              y: 14.77
          },  {
              name: 'Chicken Mandi',
              y:20.86
          }, {
              name: 'Shawarma',
              y: 14.63
          }, {
              name: 'Tandoori',
              y: 8.53
          },  {
              name: 'Beef',
              y: 12.40
          }, {
              name: 'Meals',
              y: 10.84
          }, {
              name: 'Chicken Curry',
              y: 8.51
          }, {
              name: 'Other',
              y: 10.6
          }]
      }]
  }
  }
}
