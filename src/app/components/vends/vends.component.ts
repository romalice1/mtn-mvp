import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-vends',
  templateUrl: './vends.component.html',
  styleUrls: ['./vends.component.css']
})
export class VendsComponent implements OnInit {

	constructor() { }

    chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Vends trend'
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
