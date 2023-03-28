import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubirComponent } from './form-subir.component';

describe('FormSubirComponent', () => {
  let component: FormSubirComponent;
  let fixture: ComponentFixture<FormSubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSubirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// ddd