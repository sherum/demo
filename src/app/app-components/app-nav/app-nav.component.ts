import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  @Input() loggedIn:boolean;
  @Input() home:boolean;

  constructor() { }

  ngOnInit() {
  }

}
