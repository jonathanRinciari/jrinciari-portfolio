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
    autoplaySpeed: 2000,
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
    'Designer',
    'Typescript',
    'React',
    'React-Native',
    'Native-Script',
    'Writter',
    'Teacher',
    'Contributer'
  ];

  constructor() { }

  ngOnInit() {
  }

}
