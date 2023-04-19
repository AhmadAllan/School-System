import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/interfaces/Student';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  form!: FormGroup;
  students: Student[] = [];
  student: Student = {
    firstName: '',
    lastName: '',
    grade: '',
    class: ''
  }
  
  constructor (private formBuilder: FormBuilder, private studentService: StudentsService) {}

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
    });
    this.studentService.getStudents().subscribe(students => this.students = students)
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

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
    this.isSubmitted = false;
  }

  onClick() {
    this.isSubmitted = true;
    this.isVisiable = false;
    this.form.reset();
  }

  addStudent(){
    this.student.firstName = this.form.controls['firstName'].value;
    this.student.lastName = this.form.controls['lastName'].value;
    this.student.grade = this.form.controls['grade'].value;
    this.student.class = this.form.controls['class'].value;

    
    if(this.form.valid){
      this.studentService.addStudent(this.student).subscribe()
      alert('student added successfully');
      this.isVisiable = false;
      this.form.reset();
      this.isSubmitted = false;
      window.location.reload();
    }
    this.isSubmitted = true;
  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student).subscribe(() => this.students = this.students.filter(t => t.id !== student.id))   
  }
}
