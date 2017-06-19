import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the Directory page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-directory',
  templateUrl: 'directory.html',
})
export class DirectoryPage {
  directorio: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public database: AngularFireDatabase) {
    this.directorio = this.database.list('ihj/directorio');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Directory');
  }

}
