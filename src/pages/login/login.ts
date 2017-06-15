import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario = { "correo":"", "password":""};

  constructor(
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController) {

  }

  ngOnInit(){
    console.log("Arranco el init");
  }

  ingresar = ():void=>{

    let loading = this.loadingCtrl.create({
      content:'Ingresando...'
    });

    if (this.usuario.correo != "" && this.usuario.password) {
        loading.present();
        setTimeout(()=>{
          loading.dismiss();
          this.navCtrl.push(TabsPage);
        }, 4000);
    }
    else{
      loading.dismiss();
      let alert = this.alertCtrl.create({
        title: "ingresar",
        subTitle: "Ingreso incorrecto",
        buttons: ['Aceptar']
      });
      alert.present();

    }
  }

}

