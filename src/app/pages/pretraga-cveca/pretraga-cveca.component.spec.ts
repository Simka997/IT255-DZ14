import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaCvecaComponent } from './pretraga-cveca.component';

describe('PretragaCvecaComponent', () => {
  let component: PretragaCvecaComponent;
  let fixture: ComponentFixture<PretragaCvecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaCvecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaCvecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
