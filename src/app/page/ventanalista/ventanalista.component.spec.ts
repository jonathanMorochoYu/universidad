import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanalistaComponent } from './ventanalista.component';

describe('VentanalistaComponent', () => {
  let component: VentanalistaComponent;
  let fixture: ComponentFixture<VentanalistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanalistaComponent]
    });
    fixture = TestBed.createComponent(VentanalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
