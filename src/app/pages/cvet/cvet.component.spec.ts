import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvetComponent } from './cvet.component';

describe('CvetComponent', () => {
  let component: CvetComponent;
  let fixture: ComponentFixture<CvetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
