import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'School-System';
  @ViewChild('routerOutlet', { static: true }) routerOutlet!: RouterOutlet;

  hideComponent: boolean = false
}
