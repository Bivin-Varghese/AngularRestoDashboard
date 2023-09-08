import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Weekly Analysis'
      },
      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Orders'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Parcel',
        data: [142, 141, 164, 115, 112]
      }, {
        name: 'Online',
        data: [95, 103, 112, 82, 91]
      }, {
        name: 'Dine in',
        data: [175, 145, 192, 152, 178]
      }]
    }
  }
}