import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvetComponent } from './update-cvet.component';

describe('UpdateCvetComponent', () => {
  let component: UpdateCvetComponent;
  let fixture: ComponentFixture<UpdateCvetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCvetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
