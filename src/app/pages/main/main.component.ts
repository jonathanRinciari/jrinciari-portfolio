import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @ViewChild('header') header: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('projects') projects: ElementRef;
  @ViewChild('home') home: ElementRef;
  @ViewChild('writing') writing: ElementRef;
  public shouldCollapse = false;
  public navbarOpen = false;

  constructor() {
    if (window.innerWidth <= 920) {
      this.shouldCollapse = true;
    }
  }

  onScrollEvent(e) {
    const header = document.getElementById('header');
    const about = document.getElementsByClassName('aboutContent')[0];
    const project = document.getElementsByClassName('projectContent')[0];
    const writing = document.getElementsByClassName('writingContent')[0];

    if (e.srcElement.scrollTop > 500) {
      about.classList.add('animate');
    }

    if (e.srcElement.scrollTop > 1100) {
      project.classList.add('animate');
    }

    if (e.srcElement.scrollTop > 2000) {
      writing.classList.add('animate');
    }

    if (e.srcElement.scrollTop > 125) {
      header.classList.add('scrollingHeader');
    } else {
      header.classList.remove('scrollingHeader');
    }
  }

  handleOnScroll(e) {
    const element = this[e].nativeElement;
    element.scrollIntoView({
      block: 'start',
      inline: 'nearest'
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 920) {
      this.shouldCollapse = true;
    } else {
      this.shouldCollapse = false;
    }
  }

  handleOnClick() {
    this.navbarOpen = !this.navbarOpen;
  }
}
