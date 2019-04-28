import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-overview',
  templateUrl: './writing-overview.component.html',
  styleUrls: ['./writing-overview.component.scss']
})
export class WritingOverviewComponent implements OnInit {
  markdown = './markdown/ngrx.md';
  constructor() { }

  ngOnInit() {
  }

}
