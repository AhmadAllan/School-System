import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  form!: FormGroup;
  
  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [
        '' , [Validators.required]
      ],
      lastName: [
        '' , [Validators.required]
      ],
      userName: [
        '' , [Validators.required]
      ],
      phone: [
        '' , [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0][7][7-9]([0-9]{7})')
        ]
      ],
      email: [
        '' , [
          Validators.required,
          Validators.email
        ],
      ],
      address: [
        '' , [
          Validators.required,
        ],
      ],
      password: [
        '' , [
          Validators.required,
        ],
      ],
      passwordConfirm: [
        '' , [
          Validators.required,
        ],
      ],
    })
  }

  get firstNameValid(){
    return this.form.get('firstName')?.invalid && (this.form.get('firstName')?.touched || this.form.get('firstName')?.dirty || this.isSubmitted);
  }

  get lastNameValid(){
    return this.form.get('lastName')?.invalid && (this.form.get('lastName')?.touched || this.form.get('lastName')?.dirty || this.isSubmitted);
  }

  get userNameValid(){
    return this.form.get('userName')?.invalid && (this.form.get('userName')?.touched || this.form.get('userName')?.dirty || this.isSubmitted);
   }

  get phoneValid(){
    return this.form.get('phone')?.invalid && (this.form.get('phone')?.touched || this.form.get('phone')?.dirty || this.isSubmitted);
  }

  get emailValid(){
    return this.form.get('email')?.invalid && (this.form.get('email')?.touched || this.form.get('email')?.dirty || this.isSubmitted);
  }

  get addressValid(){
    return this.form.get('address')?.invalid && (this.form.get('address')?.touched || this.form.get('address')?.dirty || this.isSubmitted);
  }

  get passwordVaild(){
    return this.form.get('password')?.invalid && (this.form.get('password')?.touched || this.form.get('password')?.dirty || this.isSubmitted);
  }

  get passwordConfirmValid(){
    return this.form.get('passwordConfirm')?.invalid && (this.form.get('passwordConfirm')?.touched || this.form.get('passwordConfirm')?.dirty || this.isSubmitted);
  }

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
  }

 onClick(str: string) {
    if(str === 'add'){
      if(this.form.valid){
        alert('user added successfully');
        this.isVisiable = false;
        this.form.reset();
        this.isSubmitted = false;
      }
      this.isSubmitted = true;
    } else {
      this.isVisiable = false;
      this.form.reset();
      this.isSubmitted = false;
    }
  }
}
