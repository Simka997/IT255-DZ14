import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CveteComponent } from './cvete.component';

describe('CveteComponent', () => {
  let component: CveteComponent;
  let fixture: ComponentFixture<CveteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CveteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CveteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
