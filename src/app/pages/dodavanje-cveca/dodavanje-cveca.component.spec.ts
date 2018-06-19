import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeCvecaComponent } from './dodavanje-cveca.component';

describe('DodavanjeCvecaComponent', () => {
  let component: DodavanjeCvecaComponent;
  let fixture: ComponentFixture<DodavanjeCvecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeCvecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeCvecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
