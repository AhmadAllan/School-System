import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
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
      class: [
        '' , [
          Validators.required,
        ],
      ],
      material: [
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

  get phoneValid(){
    return this.form.get('phone')?.invalid && (this.form.get('phone')?.touched || this.form.get('phone')?.dirty || this.isSubmitted);
  }

  get emailValid(){
    return this.form.get('email')?.invalid && (this.form.get('email')?.touched || this.form.get('email')?.dirty || this.isSubmitted);
  }

  get classValid(){
    return this.form.get('class')?.invalid && (this.form.get('class')?.touched || this.form.get('class')?.dirty || this.isSubmitted);
  }

  get materialValid(){
    return this.form.get('material')?.invalid && (this.form.get('material')?.touched || this.form.get('material')?.dirty || this.isSubmitted);
  }

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
    this.isSubmitted = false;

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
