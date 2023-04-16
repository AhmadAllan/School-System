import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, DoCheck {
  isVisiable: boolean = false;
  isValid: boolean = true;
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
      passConfirm: [
        '' , [
          Validators.required,
        ],
      ],
    })
  }

  get firstNameValid(){
    return this.form.get('firstName')?.invalid && this.form.get('firstName')?.touched;
  }

  get lastNameValid(){
    return this.form.get('lastName')?.invalid && this.form.get('lastName')?.touched;
  }

  get userNameValid(){
    return this.form.get('userName')?.invalid && this.form.get('userName')?.touched;
  }

  get phoneValid(){
    return this.form.get('phone')?.invalid && this.form.get('phone')?.touched;
  }

  get emailValid(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get addressValid(){
    return this.form.get('address')?.invalid && this.form.get('address')?.touched;
  }

  get passwordVaild(){
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }

  get passConfirmValid(){
    return this.form.get('passConfirm')?.invalid && this.form.get('passConfirm')?.touched;
  }

  ngDoCheck(): void {
    this.form.valueChanges.subscribe(() => {
      this.isValid = true;
    }); 
  }

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
  }

 onClick(str: string) {
    if(str === 'add'){
      if (this.form.valid){
        alert('user added successfully');
        this.isVisiable = false;
        this.form.reset();
      } else {
        this.isValid = false;
      }
    } else {
      this.isVisiable = false;
      this.form.reset();
    }
  }
}
