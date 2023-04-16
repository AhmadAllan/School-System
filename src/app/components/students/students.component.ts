import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  isVisiableMore: boolean = false;
  isVisiableAdd: boolean = false;
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
      grade: [
        '' , [
          Validators.required,
        ]
      ],
      class: [
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

  get gradeValid(){
    return this.form.get('grade')?.invalid && this.form.get('grade')?.touched;
  }

  get classValid(){
    return this.form.get('class')?.invalid && this.form.get('class')?.touched;
  }

  ngDoCheck(): void {
    this.form.valueChanges.subscribe(() => {
      this.isValid = true;
    }); 
  }
  onClick(str: string) {
    if(str === 'add'){
      if (this.form.valid){
        alert('user added successfully');
        this.isVisiableAdd = false
        this.form.reset();
      } else {
        this.isValid = false
      }
    } else {
      this.isVisiableAdd = false
    }
  }

  onToggle(str: String) {
    if(str === 'add'){
      this.isVisiableAdd = !this.isVisiableAdd;
      this.isVisiableMore = false
    } else {
      this.isVisiableMore = !this.isVisiableMore;
      this.isVisiableAdd = false
    }
  }
}
