import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesStudentComponent } from './messages-student.component';

describe('MessagesStudentComponent', () => {
  let component: MessagesStudentComponent;
  let fixture: ComponentFixture<MessagesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
