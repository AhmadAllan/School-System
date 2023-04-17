import { AfterContentChecked, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, DoCheck {
  form!: FormGroup;
  isValid: boolean = true;

  constructor (private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.form.valueChanges.subscribe()
  }


  ngDoCheck(): void {
    this.form.valueChanges.subscribe(() => {
      this.isValid = this.form.valid;
      console.log('form valid', this.isValid);
      console.log('ueser name', this.emailValidation);
      console.log('password', this.passwordValidation);
    });  
  }

  get emailValidation() {
    return this.form.get('email')?.invalid || this.form.get('email')?.touched;
  }

  get passwordValidation() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }


  onClick() {
    if(this.form.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.isValid = this.form.valid;
    }
  }
}
