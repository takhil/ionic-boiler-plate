import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {

  items: Array<string>;

  showPassword = false;

  constructor() { }

  ngOnInit() {
    this.items = ['Akhil', 'Bitty', 'Anusha'];
    console.log('itmes::', this.items);
  }

}
