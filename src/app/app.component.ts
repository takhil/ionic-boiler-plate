import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router,RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  activePath: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    })
    this.initializeApp();
    this.loadSideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadSideMenu() {
  this.navigate =
     [
         {
         title : 'Home',
         url   : '/tabs/home',
         icon  : 'apps'
         },
       {
         title : 'Contact',
         url   : '/tabs/contact',
         icon  : 'book'
       },
       {
         title : 'List',
         url   : '/tabs/list-view',
         icon  : 'brush'
       },
       {
         title : 'Map',
         url   : 'map',
         icon  : 'home'
       }
     ];
  }
}
