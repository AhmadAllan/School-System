import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  isVisiable: boolean = false;

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
  }
}
