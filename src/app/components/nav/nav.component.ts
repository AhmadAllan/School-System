import { Token } from '@angular/compiler';
import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements  AfterContentChecked {

  constructor (private router: Router) {}
  activeNav: string ='';


  ngAfterContentChecked() {
    this.activeNav = this.router.url.toString();
  }
}
