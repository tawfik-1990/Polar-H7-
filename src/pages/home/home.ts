import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HeartratePage } from '../heartrate/heartrate';
import { TippsPage } from '../tipps/tipps';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
charts: string;
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.charts="Tag";

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
}

public barChartColors: any [] =[
    { // grey
    backgroundColor: 'rgb(18, 159, 229)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#5265f2',
    pointHoverBackgroundColor: '#5265f2',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { // dark grey
    backgroundColor: 'rgb(18, 159, 229)',
    borderColor: 'rgba(77,83,96,1)',
    pointBackgroundColor: 'rgba(77,83,96,1)',
    pointBorderColor: '#5265f2',
    pointHoverBackgroundColor: '#5265f2',
    pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  { // grey
    backgroundColor: 'rgb(18, 159, 229)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#5265f2',
    pointHoverBackgroundColor: '#5265f2',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
]
public barChartLabels:string[] = ['08:00','*','*','*','*','*','09:00','*','*','*','*','*', '10:00','*','*','*','*','*', '11:00','*','*','*','*','*', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
public barChartType:string = 'bar';

public barChartData:any[] = [
  {data: [65, 59, 80, 81, 56, 55, 40, 30, 40, 15, 10], label: 'heart rate'}];


// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}



openheartrate(){
	this.navCtrl.push(HeartratePage);
}

openTipps(){
  this.navCtrl.push(TippsPage);
}
}






