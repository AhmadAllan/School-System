import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent {
  isVisiable: boolean = false;

  onToggle(): void {
    this.isVisiable = !this.isVisiable;
  }
}
