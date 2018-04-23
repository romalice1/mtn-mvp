import { Component } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  isNotLoginPage=true;

  constructor( private router: Router, private location: Location) {
		//track route 
		router.events.subscribe((val)=>{
			if(location.path() == '/login'){
				this.isNotLoginPage = false;
		    }else{
		    	this.isNotLoginPage = true;
		    }
		});
	}


}
