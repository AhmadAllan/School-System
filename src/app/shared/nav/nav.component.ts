import { AfterContentChecked, Component } from '@angular/core';
import { Router } from '@angular/router';

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
