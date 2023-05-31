import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormSubirComponent } from './edit-form-subir.component';

describe('EditFormSubirComponent', () => {
  let component: EditFormSubirComponent;
  let fixture: ComponentFixture<EditFormSubirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormSubirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFormSubirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
