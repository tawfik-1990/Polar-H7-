import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,  public menuCtrl: MenuController) {
    /*this.navCtrl = navCtrl;
    this.menuCtrl = menuCtrl;
    this.menuCtrl.enable(false, 'myMenu');*/

  }

openLogin(){
this.navCtrl.push(HomePage);
}

openSignup(){
	this.navCtrl.push(SignupPage);
}

}
