import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingOverviewComponent } from './writing-overview.component';

describe('WritingOverviewComponent', () => {
  let component: WritingOverviewComponent;
  let fixture: ComponentFixture<WritingOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
