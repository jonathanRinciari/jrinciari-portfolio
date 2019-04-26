import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('header') header: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('projects') projects: ElementRef;
  @ViewChild('home') home: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onScrollEvent(e) {
    const item = document.getElementById('header');
    if (e.srcElement.scrollTop > 125) {
      item.classList.add('scrollingHeader');
    } else {
      item.classList.remove('scrollingHeader');
    }
  }

  handleOnScroll(e) {
    const element = this[e].nativeElement;
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
