import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent {
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
      address: [
        '' , [
          Validators.required,
        ],
      ]
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

  get addressValid(){
    return this.form.get('address')?.invalid && this.form.get('address')?.touched;
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
