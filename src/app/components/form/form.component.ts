import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorService } from '../../services/custom-validator.service';

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
      name: ['', [Validators.required, CustomValidatorService.max(100), CustomValidatorService.min(0)]],
      age: ['', Validators.required]
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
