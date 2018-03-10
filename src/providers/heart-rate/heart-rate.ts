
import { Injectable } from '@angular/core';

import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { BLE } from '@ionic-native/ble';
import { Diagnostic } from '@ionic-native/diagnostic';
import {Observable} from '@rxjs/Rx';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class HeartRateProvider {


peripheral: any = {};

  devices: any[] = [];
  statusMessage: string;
  heartrate: any;
  data1 : any[]= [];
 data2 : any[]= [];

 timer:any;

subscription:any;
subscription1:any;

  

 constructor( private toastCtrl: ToastController,
              private ble: BLE,
              private ngZone: NgZone,
              private alertCtrl: AlertController,
              private diagnostic: Diagnostic) {
  
  }

scan() {
    this.setStatus('Scanning ');
    this.devices = [];  
    this.ble.scan(['180d'], 5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

 
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Error scanning  Bluetooth ',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  



  connect(nt : string ) {
 
this.ble.connect(nt ).subscribe(
      peripheral => this.onConnected(nt),
      peripheral => this.onDeviceDisconnected(peripheral)
    );
setTimeout(this.setStatus.bind(this), 5000, 'connected');
  }
  onConnected(nt) {


 this.setStatus('Connected to ' + (nt));
   
   this.ble.startNotification(nt, '180d' ,'2a37').subscribe(
      data => this.ondataChange(data),
      () => this.showAlert('Unexpected Error', 'Failed to subscribe ')
    )

   
  

  }
    ondataChange(buffer:ArrayBuffer) {

   
 var data = new Uint8Array(buffer);
    
    this.ngZone.run(() => {
      this.heartrate = data[1];
      this.setStatus( 'Data changed  ');


    });

  }
  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
    onDeviceDisconnected(peripheral) {
    let toast = this.toastCtrl.create({
      message: 'The peripheral unexpectedly disconnected',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }


 Bluetooth()

  {
 this.diagnostic.getBluetoothState()
  .then((state) => {
    if (state == this.diagnostic.bluetoothState.POWERED_ON){
   
    } else {
      let toast = this.toastCtrl.create({
      message: 'blu is ZU',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
    }
  })
}






}