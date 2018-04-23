import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  chart = new Chart({
      chart: {
        type: 'area'
      },
      title: {
        text: 'Airtime sales'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 4, 5, 10, 7]
      }],

    });


  ngOnInit() {
  }

}
