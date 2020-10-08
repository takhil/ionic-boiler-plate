import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(
    private platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
  }

  nextpage() {
    this.router.navigate(['/side-menu']);
  }
}
