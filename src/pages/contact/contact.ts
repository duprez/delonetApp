import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  public copyright = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() { }

}
