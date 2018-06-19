import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCvetTipComponent } from './update-cvet-tip.component';

describe('UpdateCvetTipComponent', () => {
  let component: UpdateCvetTipComponent;
  let fixture: ComponentFixture<UpdateCvetTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCvetTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCvetTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
