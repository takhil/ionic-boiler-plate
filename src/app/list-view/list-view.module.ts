import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ListViewPageRoutingModule } from './list-view-routing.module';

import { ListViewPage } from './list-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ListViewPageRoutingModule
  ],
  declarations: [ListViewPage]
})
export class ListViewPageModule { }
