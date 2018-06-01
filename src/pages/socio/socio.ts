import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataSocioProvider } from '../../providers/data-socio/data-socio';
import { Socio } from '../../models/Socio.model';
import { AntonioFilterPipe } from '../../pipes/antonio-filter/antonio-filter';
import { SocioFormPage } from '../socio-form/socio-form';

@Component({
  selector: 'page-socio',
  templateUrl: 'socio.html',
  providers: [AntonioFilterPipe]
})
export class SocioPage {

  private socios: Socio[];
  private filteredSocios: Socio[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private dataSocio: DataSocioProvider,
    private antonioFilter: AntonioFilterPipe,
  ) { }

  ionViewDidLoad() {
    this.getSocios();
  }

  getSocios() {
    this.dataSocio.getSocios().subscribe((data: Socio[]) => {
      this.socios = data;
      this.filteredSocios = this.socios;
    });
  }

  modifySocio(socio: Socio) {
    this.navCtrl.setRoot(SocioFormPage, {socio: socio});
  }

  addSocio() {
    this.navCtrl.setRoot(SocioFormPage);
  }

  onFilter(event) {
    this.filteredSocios = this.antonioFilter.transform(
      this.socios,
      event.target.value.toLowerCase()
    );
  }
}
