import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(val) {
    this.scrollTo.emit(val);
  }

}
