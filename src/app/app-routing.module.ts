import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // login
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  // {
  //   path: 'home', // home
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'about', // about
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  // {
  //   path: 'list-view',  // list-view
  //   loadChildren: () => import('./list-view/list-view.module').then(m => m.ListViewPageModule)
  // },

  // {
  //   path: 'map',
  //   loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  // },

  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  // },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
