import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isValid: boolean = true;

  constructor (private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [
        '',
        [Validators.required]
      ],
      pass: [
        '',
        [Validators.required]
      ]
    })

    this.form.valueChanges.subscribe()
  }

  get emailValidation() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get passValidation() {
    return this.form.get('pass')?.invalid && this.form.get('pass')?.touched;
  }

  onClick() {
    if(this.form.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.isValid = false;
      console.log(this.isValid);
      
    }
  }
}
