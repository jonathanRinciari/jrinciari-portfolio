import { Component, OnInit, HostListener, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();
  @Input() collapse = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(val) {
    this.scrollTo.emit(val);
  }

}
