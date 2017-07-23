import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentPage {

public usiDetails : any;
  constructor(public navCtrl: NavController) { 
  	const datos = JSON.parse(localStorage.getItem('usi'));
  	this.usiDetails = datos.usi;
  }

 

}
