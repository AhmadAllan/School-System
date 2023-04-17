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
    return this.form.get('firstName')?.invalid && (this.form.get('firstName')?.touched || this.form.get('firstName')?.dirty || this.isSubmitted);
  }

  get lastNameValid(){
    return this.form.get('lastName')?.invalid && (this.form.get('lastName')?.touched || this.form.get('lastName')?.dirty || this.isSubmitted);
  }

  get gradeValid(){
    return this.form.get('grade')?.invalid && (this.form.get('grade')?.touched || this.form.get('grade')?.dirty || this.isSubmitted);
  }

  get classValid(){
    return this.form.get('class')?.invalid && (this.form.get('class')?.touched || this.form.get('class')?.dirty || this.isSubmitted);
  }

  onClick(str: string) {
    if(str === 'add'){
      if(this.form.valid){
        alert('user added successfully');
        this.isVisiableAdd = false;
        this.form.reset();
        this.isSubmitted = false;
      }
      this.isSubmitted = true;
    } else {
      this.isVisiableAdd = false;
      this.form.reset();
      this.isSubmitted = false;
    }
  }

  onToggle(str: String) {
    if(str === 'add'){
      this.isVisiableAdd = !this.isVisiableAdd;
      this.isVisiableMore = false
      this.isSubmitted = false;

    } else {
      this.isVisiableMore = !this.isVisiableMore;
      this.isVisiableAdd = false
      this.isSubmitted = false;

    }
  }
}
