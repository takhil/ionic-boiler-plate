import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '', // home
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home', // home
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'about', // about
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'list-view',  // list-view
    loadChildren: () => import('./list-view/list-view.module').then(m => m.ListViewPageModule)
  },
  {
    path: 'side-menu', // side-menu
    loadChildren: () => import('./side-menu/side-menu.module').then(m => m.SideMenuPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then(m => m.MapModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
