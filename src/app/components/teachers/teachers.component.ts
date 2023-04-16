import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
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
    return this.form.get('firstName')?.invalid && this.form.get('firstName')?.touched;
  }

  get lastNameValid(){
    return this.form.get('lastName')?.invalid && this.form.get('lastName')?.touched;
  }

  get phoneValid(){
    return this.form.get('phone')?.invalid && this.form.get('phone')?.touched;
  }

  get emailValid(){
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get classValid(){
    return this.form.get('class')?.invalid && this.form.get('class')?.touched;
  }

  get materialVaild(){
    return this.form.get('material')?.invalid && this.form.get('material')?.touched;
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
