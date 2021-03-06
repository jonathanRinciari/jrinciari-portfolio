import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-text',
  templateUrl: './scroll-text.component.html',
  styleUrls: ['./scroll-text.component.scss']
})
export class ScrollTextComponent implements OnInit {
  slideConfig = {
    'slidesToShow': 1,
    'slidesToScroll': 1,
    'vertical': true,
    autoplaySpeed: 2200,
    infinite: true,
    autoplay: true,
    arrows: false
  };
  items = [
    'Developer',
    'Architect',
    'Angular',
    'PWA',
    'Mobile',
    'Typescript',
    'React',
    'NativeScript',
    'Contributer',
    'React Native'
  ];

  constructor() { }

  ngOnInit() {
  }

}
