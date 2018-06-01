import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// Components
import { MyApp } from './app.component';
// Pages
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { SocioPage } from '../pages/socio/socio';
import { SocioFormPage } from '../pages/socio-form/socio-form';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// Providers
import { DataMonitorProvider } from '../providers/data-monitor/data-monitor';
import { DataSocioProvider } from '../providers/data-socio/data-socio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    LoginPage,
    SocioPage,
    SocioFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    LoginPage,
    SocioPage,
    SocioFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataMonitorProvider,
    DataSocioProvider
  ]
})
export class AppModule {}
