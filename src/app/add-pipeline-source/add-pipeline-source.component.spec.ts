import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPipelineSourceComponent } from './add-pipeline-source.component';

describe('AddPipelineSourceComponent', () => {
  let component: AddPipelineSourceComponent;
  let fixture: ComponentFixture<AddPipelineSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPipelineSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPipelineSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
