import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {
  @ViewChild('triangle') triangle: ElementRef;
  @Input() color: string;
  @Input() borderLeft: string;
  @Input() borderRight: string;
  @Input() borderBottom: string;
  @Input() borderTop: string;
  @Input() rotate: string;
  @Input() top: string;
  @Input() zIndex: string;
  @Input() right: string;
  @Input() bottom: string;
  @Input() left: string;

  constructor(private render: Renderer2) { }

  ngOnInit() {
    if (this.borderLeft) {
      this.render.setStyle(this.triangle.nativeElement, 'border-left', this.borderLeft);
    }

    if (this.borderBottom) {
      this.render.setStyle(this.triangle.nativeElement, 'border-bottom', this.borderBottom);
    }

    if (this.borderRight) {
      this.render.setStyle(this.triangle.nativeElement, 'border-right', this.borderRight);
    }

    if (this.borderTop) {
      this.render.setStyle(this.triangle.nativeElement, 'border-top', this.borderTop);
    }

    if (this.top) {
      this.render.setStyle(this.triangle.nativeElement, 'top', this.top);
    }

    if (this.left) {
      this.render.setStyle(this.triangle.nativeElement, 'left', this.left);
    }

    if (this.bottom) {
      this.render.setStyle(this.triangle.nativeElement, 'bottom', this.bottom);
    }

    if (this.zIndex) {
      this.render.setStyle(this.triangle.nativeElement, 'z-index', this.zIndex);
    }

    if (this.rotate) {
      this.render.setStyle(this.triangle.nativeElement, 'transform', `rotate(${ this.rotate }deg)`);
    }

    if (this.right) {
      this.render.setStyle(this.triangle.nativeElement, 'right', this.right);
    }

  }

}
