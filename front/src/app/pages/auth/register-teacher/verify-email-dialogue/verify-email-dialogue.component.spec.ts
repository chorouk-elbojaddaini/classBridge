import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailDialogueComponent } from './verify-email-dialogue.component';

describe('VerifyEmailDialogueComponent', () => {
  let component: VerifyEmailDialogueComponent;
  let fixture: ComponentFixture<VerifyEmailDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEmailDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEmailDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
