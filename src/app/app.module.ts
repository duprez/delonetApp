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

import { CustomEventTitleFormatterProvider } from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDateFormatterProvider } from '../providers/custom-date-formatter/custom-date-formatter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';
import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

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
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule
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
    DataMonitorProvider,
    CustomEventTitleFormatterProvider,
    CustomDateFormatterProvider
  ]
})
export class AppModule {}
