import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTeacherComponent } from './body-teacher.component';

describe('BodyTeacherComponent', () => {
  let component: BodyTeacherComponent;
  let fixture: ComponentFixture<BodyTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTeacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
