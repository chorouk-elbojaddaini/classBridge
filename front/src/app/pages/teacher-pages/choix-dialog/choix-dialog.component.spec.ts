import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixDialogComponent } from './choix-dialog.component';

describe('ChoixDialogComponent', () => {
  let component: ChoixDialogComponent;
  let fixture: ComponentFixture<ChoixDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
