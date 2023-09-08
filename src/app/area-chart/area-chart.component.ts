import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions = {}

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Daily Sales Evaluation ',
        align: 'center'
      },
      subtitle: {
        text: 'Resto',
        align: 'center'
      },
      xAxis: {
        categories: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
      },

      yAxis: {
        title: {
          // useHTML: true,
          text: 'Number of orders'
        },
        // categories: ['10','13','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00']
      },
      tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {

        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
        }
      },
      series: [
        {
          name: 'Total',
          data: [85, 111, 81, 71, 88, 125, 144, 174, 145, 183, 130]

        }, {
          name: 'Parcel',
          data: [66, 65, 63, 63, 62, 57, 56, 50, 70, 88, 62]

        }, {
          name: 'Online',
          data: [47, 48, 48, 49, 50, 49, 49, 49, 121, 132, 98]
        }, {
          name: 'Dine in',
          data: [52, 87, 58, 35, 28, 30, 54, 61, 144, 145, 100]
        },]
    }
  }
}
