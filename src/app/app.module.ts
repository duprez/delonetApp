import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataMonitorProvider } from '../providers/data-monitor/data-monitor';

import { HttpClientModule } from '@angular/common/http';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { ReservePage } from '../pages/reserve/reserve';

import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    LoginPage,
    ReservePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgCalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    LoginPage,
    ReservePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataMonitorProvider
  ]
})
export class AppModule {}
