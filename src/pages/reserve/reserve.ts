import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { getLocaleDateFormat } from "@angular/common";
import { CalendarEvent } from "calendar-utils";

@Component({
  selector: "page-reserve",
  templateUrl: "reserve.html"
})
export class ReservePage {
  
  private today = new Date();
  @Input() viewDate: Date;
  @Input() events: CalendarEvent[] = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}
}
