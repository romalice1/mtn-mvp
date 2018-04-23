import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-topups',
  templateUrl: './topups.component.html',
  styleUrls: ['./topups.component.css']
})
export class TopupsComponent implements OnInit {

  constructor() { }

  chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Topup trend'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Amount',
        data: [1, 5, 8, 5, 22, 10, 20]
      }],

    });

  ngOnInit() {
  }

}
