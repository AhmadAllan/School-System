import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  isVisiableMore: boolean = false;
  isVisiableAdd: boolean = false

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
