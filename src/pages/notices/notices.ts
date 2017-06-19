import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';



@Component({selector: 'page-notices',templateUrl: 'notices.html'})

export class NoticesPage {

  listado: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public database: AngularFireDatabase)
  {
    this.listado = this.database.list('ihj/noticias', {
      query: {
        orderByChild: '-fecha'
      }
    });
    /*this.listado = this.database.list('ihj/noticias');
    this.listado.map( (arr) => { return arr.reverse(); } );*/
    
    
    

    // this.listado.push({
    //   foto: 'https://firebasestorage.googleapis.com/v0/b/ihjs-145004.appspot.com/o/17310930_1240803779349341_3681844902700336889_o.jpg?alt=media&token=fe396fad-45af-404d-82f5-13517c075b2c',
    //   titulo: 'InterPrepasFutbol',
    //   descripcion: 'Los invitamos a que se inscriban a nuestro torneo #InterPrepasFutbol7, donde estarán participando preparatorias públicas y privadas, tendremos premios para el 1er, 2do y 3er lugar.La inauguración sera el viernes 24 de Marzo a las 8:00 PM en las instalaciones de la Unidad Deportiva Héctor Espino.¡Tienes hasta el 22 de marzo para inscribirte! IDH-Instituto del Deporte de Hermosillo Escudo Ciudadano Hermosillo Seguro Cimarrones de Sonora FC'
    // });

  }
}

// interface noticia{
//  foto:string;
//  descripcion:string;
//}

