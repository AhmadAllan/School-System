import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admin } from 'src/app/interfaces/Admin';
import { AdminService } from 'src/app/services/admin.service';
import { CustonValidationService } from 'src/app/services/custon-validation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  form!: FormGroup;
  admins: Admin[] = [];
  admin: Admin = {
    id: this.admins.length+1,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    phoneNumber: undefined,
    address: '',
    password: ''
  }

  
  constructor (private formBuilder: FormBuilder,private customVadlidator: CustonValidationService, private adminService: AdminService) {}

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
    }, {
      validator: this.customVadlidator.passwordMatchValidator("password","passwordConfirm")
    })

    this.adminService.getAdmins().subscribe(admins => this.admins = admins)    
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


  // to controll the view of element
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

  addAdmin() {
    this.admin
    console.log(this.admin.firstName);
    
    this.adminService.addAdmin(this.admin).subscribe(admin => this.admins.push(admin))
    if(this.form.valid){
      alert('user added successfully');
      this.isVisiable = false;
      this.form.reset();
      this.isSubmitted = false;
    }
    this.isSubmitted = true;
  }
}
