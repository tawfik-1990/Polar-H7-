import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { BluetouthPage } from '../bluetouth/bluetouth';
import { HomePage } from '../home/home';
/**
 * Generated class for the EinstellungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-einstellung',
  templateUrl: 'einstellung.html',
})
export class EinstellungPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EinstellungPage');
  }

  goBack(){
  	this.navCtrl.setRoot(HomePage);
  }

searchBlue(){
	this.navCtrl.push(BluetouthPage);
}
}
