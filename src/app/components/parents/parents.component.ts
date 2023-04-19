import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Parent } from 'src/app/interfaces/Parent';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  form!: FormGroup;
  parents: Parent[] = [];
  parent: Parent = {
    firstName: '',
    lastName: '',
    phoneNumber: 0,
    address: ''
  } 
  
  constructor (private formBuilder: FormBuilder, private parentService: ParentService) {}

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
    });

    this.parentService.getParents().subscribe(parents => this.parents = parents);
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

  get addressValid(){
    return this.form.get('address')?.invalid && (this.form.get('address')?.touched || this.form.get('address')?.dirty || this.isSubmitted);
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

  addParent(){
    this.parent.firstName = this.form.controls['firstName'].value;
    this.parent.lastName = this.form.controls['lastName'].value;
    this.parent.address = this.form.controls['address'].value;
    this.parent.phoneNumber = this.form.controls['phone'].value;

    this.parentService.addParent(this.parent).subscribe()
    if(this.form.valid){
      alert('parent added successfully');
      this.isVisiable = false;
      this.form.reset();
      this.isSubmitted = false;
      window.location.reload();
    }
    this.isSubmitted = true;
  }

  deleteParent(parent: Parent) {
    this.parentService.deleteParent(parent).subscribe(() => this.parents = this.parents.filter(t => t.id !== parent.id))   
  }
}
