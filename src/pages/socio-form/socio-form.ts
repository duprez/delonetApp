import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Socio } from '../../models/Socio.model';
import { SocioPage } from '../socio/socio';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSocioProvider } from '../../providers/data-socio/data-socio';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-socio-form',
  templateUrl: 'socio-form.html',
})
export class SocioFormPage {

  private socio: Socio;
  private socioForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private fb: FormBuilder,
    private dataSocio: DataSocioProvider,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    if (this.navParams.get('socio')) {
      this.socio = this.navParams.get('socio');
      this.socioForm = this.fb.group({
        id_socio: [this.socio.id_socio],
        nombre: [this.socio.nombre, Validators.required],
        apellidos: [this.socio.apellidos, Validators.required],
        direccion: [this.socio.direccion, Validators.required],
        telefono: [this.socio.telefono, Validators.required],
        fecha_alta: [this.socio.fecha_alta, Validators.required],
        fecha_baja: [ this.socio.fecha_baja, Validators.required],
        id_clase: [this.socio.id_clase],
        email: [this.socio.email, Validators.required]         
      });
    } else {
      this.socioForm = this.fb.group({
        id_socio: [''],
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        fecha_alta: ['', Validators.required],
        fecha_baja: [ '', Validators.required]  ,
        id_clase: [''],
        email: ['', Validators.required]  
      });
    }

  }

  goToSocios() {
    this.navCtrl.setRoot(SocioPage);
  }

  onSubmit() {
    if (this.navParams.get('socio')) {
      this.dataSocio.modifySocio(this.socio.id_socio, this.socioForm.value).subscribe();
    } else {
      this.dataSocio.createSocio(this.socioForm.value).subscribe();
    }
    this.showAlertAdded();

  }

  onDelete() {
    this.dataSocio.deleteSocio(this.socio.id_socio).subscribe(data => {
      console.log(data);
    });
    // this.navCtrl.setRoot(SocioPage);
  }

  showAlertAdded() {
    let alert = this.alertCtrl.create({
      title: 'Usuario guardado',
      buttons: ['OK']
    });
    alert.present();
  }
}
