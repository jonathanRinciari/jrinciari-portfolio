import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() scrollTo = new EventEmitter();
  @Input() collapse = false;
  navbarClicked = false;
  constructor() { }

  ngOnInit() {
  }

  onClick(val) {
    if (this.navbarClicked) {
      this.navbarClicked = false;
    }

    this.scrollTo.emit(val);
  }

  handleOnClick() {
    this.navbarClicked = !this.navbarClicked;
  }

}
