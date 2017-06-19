import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Events page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  eventos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
    this.eventos = this.database.list('ihj/eventos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Events');
  }

}
