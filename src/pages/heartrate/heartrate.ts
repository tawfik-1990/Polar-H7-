import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeartRateProvider } from '../../providers/heart-rate/heart-rate';
import { InfoPage } from '../info/info';

/**
 * Generated class for the HeartratePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heartrate',
  templateUrl: 'heartrate.html',
})
export class HeartratePage {
   public lottieConfig: Object;
    private anim: any;
    private animationSpeed: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,public heartRate : HeartRateProvider) {
 this.lottieConfig = {
            path: 'assets/heart.json',
            autoplay: true,
            loop: true
        };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeartratePage');
  }

 handleAnimation(anim: any) {
        this.anim = anim;
    }


openInfo(){
	this.navCtrl.push(InfoPage);
}


}
