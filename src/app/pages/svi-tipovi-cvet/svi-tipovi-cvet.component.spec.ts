import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviTipoviCvetComponent } from './svi-tipovi-cvet.component';

describe('SviTipoviCvetComponent', () => {
  let component: SviTipoviCvetComponent;
  let fixture: ComponentFixture<SviTipoviCvetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviTipoviCvetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviTipoviCvetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
