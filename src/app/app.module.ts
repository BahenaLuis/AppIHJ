import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GaleryPage } from '../pages/galery/galery';
import { NoticesPage } from '../pages/notices/notices';
import { EventsPage } from '../pages/events/events';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { DirectoryPage } from '../pages/directory/directory';
import { ProgramsPage } from '../pages/programs/programs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

var links = [
  { component: LoginPage, name: 'Login', segment:'login'},
  { component: TabsPage, name: 'tabs', segment: 'tabs'}
]

import { AngularFireModule } from 'angularfire2';
export const CONFIG = {
  apiKey: "AIzaSyB50gMW1fXyvNi5IcUexXiw091hxnfxaBw",
  authDomain: "ihjs-145004.firebaseapp.com",
  databaseURL: "https://ihjs-145004.firebaseio.com",
  storageBucket: "ihjs-145004.appspot.com",
  messagingSenderId: "751441911514"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GaleryPage,
    NoticesPage,
    EventsPage,
    TabsPage,
    LoginPage,
    DirectoryPage,
    ProgramsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, links),
    AngularFireModule.initializeApp(CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    GaleryPage,
    NoticesPage,
    EventsPage,
    TabsPage,
    LoginPage,
    DirectoryPage,
    ProgramsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
