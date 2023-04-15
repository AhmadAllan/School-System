import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  isVisiable: boolean = false;

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
  }
}
