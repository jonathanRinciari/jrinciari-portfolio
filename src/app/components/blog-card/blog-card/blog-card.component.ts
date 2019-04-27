import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() blogTitle = 'Angular Validators';
  // tslint:disable-next-line:max-line-length
  @Input() blogDescription = 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​.';
  @Input() blogDate = 'Jan 2019 - 5 min';
  constructor() { }

  ngOnInit() {
  }

}
