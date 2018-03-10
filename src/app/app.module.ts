import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts';
import { LottieAnimationViewModule } from 'lottie-angular2';

//import pages 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HeartratePage } from '../pages/heartrate/heartrate';
import { EinstellungPage } from '../pages/einstellung/einstellung';
import { KontoPage } from '../pages/konto/konto';
import { AboutPage } from '../pages/about/about';
import { TippsPage } from '../pages/tipps/tipps';
import { InfoPage } from '../pages/info/info';
import { BluetouthPage } from '../pages/bluetouth/bluetouth';


import { HeartRateProvider } from '../providers/heart-rate/heart-rate';


import {HttpClientModule} from '@angular/common/http';

import { BLE } from '@ionic-native/ble';
import { Diagnostic } from '@ionic-native/diagnostic';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    HeartratePage,
    EinstellungPage,
    KontoPage,
    AboutPage,
    TippsPage,
    InfoPage,
    BluetouthPage
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    IonicModule.forRoot(MyApp),
    LottieAnimationViewModule.forRoot(),
    ChartsModule,

       ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    HeartratePage,
    EinstellungPage,
    KontoPage,
    AboutPage,
    TippsPage,
    InfoPage,
    BluetouthPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    HeartRateProvider,
  
      BLE,
      Diagnostic
  ]
})
export class AppModule {}
