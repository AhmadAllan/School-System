import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  title: String = 'School-System';
  url: string = '';
  constructor(private router: Router) { }


  ngAfterContentChecked(): void {
    this.url = this.router.url.toString();
    console.log(this.url);
    
  }
}
