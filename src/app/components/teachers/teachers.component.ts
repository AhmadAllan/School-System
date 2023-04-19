import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  form!: FormGroup;
  teachers: Teacher[] = [];
  teacher: Teacher = {
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    material: '',
    phoneNumber: 0
  }
  
  constructor (private formBuilder: FormBuilder, private teacherService: TeacherService) {}

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
    });
    this.teacherService.getTeachers().subscribe(teachers => this.teachers = teachers);
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

  onClick() {
    this.isSubmitted = true;
    this.isVisiable = false;
    this.form.reset();
    this.isSubmitted = false;
  }

  addTeacher(){
    console.log('here');
    
    this.teacher.firstName = this.form.controls['firstName'].value;
    this.teacher.lastName = this.form.controls['lastName'].value;
    this.teacher.email = this.form.controls['email'].value;
    this.teacher.class = this.form.controls['class'].value;
    this.teacher.material = this.form.controls['material'].value;
    this.teacher.phoneNumber = this.form.controls['phone'].value;

    this.teacherService.addTeacher(this.teacher).subscribe()
    if(this.form.valid){
      alert('teacher added successfully');
      this.isVisiable = false;
      this.form.reset();
      this.isSubmitted = false;
      window.location.reload();
    }
    this.isSubmitted = true;
  }

  deleteTeacher(teacher: Teacher) {
    this.teacherService.deleteTeacher(teacher).subscribe(() => this.teachers = this.teachers.filter(t => t.id !== teacher.id))   
  }
}
