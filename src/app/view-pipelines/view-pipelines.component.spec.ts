import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPipelinesComponent } from './view-pipelines.component';

describe('ViewPipelinesComponent', () => {
  let component: ViewPipelinesComponent;
  let fixture: ComponentFixture<ViewPipelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPipelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
