import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formContent: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formContent = this.fb.group({
      name: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)])
    });
  }

  onSubmit() {
    console.log(this.formContent.value);
  }

  onReset() {
    this.formContent.reset();
    this.createForm();
  }
}
