import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-trade-partners',
  templateUrl: './trade-partners.component.html',
  styleUrls: ['./trade-partners.component.css']
})
export class TradePartnersComponent implements OnInit {

  constructor() { }

  	chart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Top Trade Partners'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Amount',
        data: [ ["Cust1",3000], ["Cust2",3500], ["Cust3",2345], ["Cust4",2453] ]
      }],

    });

  ngOnInit() {
  }

}
