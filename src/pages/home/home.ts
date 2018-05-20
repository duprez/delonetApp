import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataMonitorProvider } from '../../providers/data-monitor/data-monitor';
import { Slides } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public monitores;
  public copyright = new Date();
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public dataMonitor: DataMonitorProvider
  ) {
    this.getMonitores();
  }

  getMonitores() {
    this.dataMonitor.getMonitores().subscribe(data => {
      console.log(data);
      this.monitores = data;
    });
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
}
