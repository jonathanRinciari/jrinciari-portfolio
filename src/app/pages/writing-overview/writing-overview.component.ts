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

  /**
   * // TODO
   * This section is a work in Progress
   * It needs to display all blog posts using the card on main
   * When clicked it will move to a new page to display the blog
   */

}
