import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';

import { EventsPage } from '../events/events';
import { NoticesPage } from '../notices/notices';
import { GaleryPage } from '../galery/galery';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = EventsPage;
  tab2Root: any = NoticesPage;
  tab3Root: any = GaleryPage;

  constructor() {

  }
  
}

