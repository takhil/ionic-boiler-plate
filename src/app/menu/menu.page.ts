import { Component,OnChanges,OnInit } from '@angular/core';

import { Router,RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  navigate: any;
  activePath: string;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log('URL path', event.url);
      this.activePath = event.url;
      console.log('URL Active path', this.activePath);
    })
    this.loadSideMenu();
  }

  ngOnInit() {
  }

loadSideMenu() {
  this.navigate =
     [
         {
         title : 'Home',
         url   : '/menu/home',
         icon  : 'apps'
         },
       {
         title : 'Contact',
         url   : '/menu/contact',
         icon  : 'book'
       },
       {
         title : 'List',
         url   : '/menu/list-view',
         icon  : 'brush'
       },
       {
         title : 'Map',
         url   : '/map',
         icon  : 'home'
       },
        {
         title : 'Button',
         url   : '/button',
         icon  : 'folder'
       }
     ];
  }
}
