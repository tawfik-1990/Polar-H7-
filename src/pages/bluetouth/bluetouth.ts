import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeartRateProvider } from '../../providers/heart-rate/heart-rate';

/**
 * Generated class for the BluetouthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetouth',
  templateUrl: 'bluetouth.html',
})
export class BluetouthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public heartRate : HeartRateProvider) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.heartRate. Bluetooth();
  }

  scan()
  {
  
 this.heartRate.scan();




  }
connect(device)
{
	
	 this.heartRate.connect(device);
}


  }


