import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ContactPage } from "../pages/contact/contact";
import { LoginPage } from "../pages/login/login";
import { ReservePage } from "../pages/reserve/reserve";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ReservePage; // Página que se mostrará nada más iniciar la APP
  private submenu: boolean;
  pages: Array<{
    title: string;
    component: any;
    icon: string;
    back?: string;
  }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ) {
    this.initializeApp();
    this.getMainMenu();
  }

  getMainMenu() {
    // used for an example of ngFor and navigation
    this.pages = [
      {
        title: "Inicio",
        component: HomePage,
        icon: "home"
      },
      {
        title: "Administrar",
        component: "",
        icon: "person"
      },
      {
        title: "Reservar",
        component: ReservePage,
        icon: "calendar"
      },
      {
        title: "Contacto",
        component: ContactPage,
        icon: "contact"
      },
      {
        title: "Conectarme",
        component: LoginPage,
        icon: "logo-android"
      }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.submenu = false;
    if (page && page.component.length > 0) {
      this.getMainMenu();
      this.nav.setRoot(page.component);
      this.menuCtrl.close();
    } else {
      if (page.title === "Administrar") {
        this.submenu = true;
        this.pages = [
          {
            title: "Socio",
            component: LoginPage,
            icon: "person",
            back: "goBack"
          }
        ];
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
      }
    }
  }

  closeSubmenu() {
    this.submenu = false;
    this.getMainMenu();
    this.menuCtrl.enable(true);
    this.menuCtrl.open();
  }
}
