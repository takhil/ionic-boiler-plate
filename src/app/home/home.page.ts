import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
