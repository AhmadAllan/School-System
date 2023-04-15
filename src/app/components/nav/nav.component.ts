import { Token } from '@angular/compiler';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activeDivId: string = localStorage.getItem('activeDivId') || 'dashboard';

  ngOnInit(): void {
    // Initialize the activeDivId value from localStorage
    this.activeDivId = localStorage.getItem('activeDivId') || 'dashboard';
  }

  setActive(id: string) {
    this.activeDivId = id;
    localStorage.setItem('activeDivId', id);
  }
}
