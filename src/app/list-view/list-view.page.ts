import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.page.html',
  styleUrls: ['./list-view.page.scss'],
})
export class ListViewPage implements OnInit {

  items: Array<string>;
  form: FormGroup;

  showPassword = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.items = ['qlwknoq', 'Xasncali', 'cnoqieno', 'qlwknoq', 'Xasncali', 'cnoqieno'];
    console.log('itmes::', this.items);
    this.form = this.formBuilder.group({
      UserId: [null, Validators.required],
      password: [null, Validators.required],
      StaySignedIn: false
    });
  }

}
