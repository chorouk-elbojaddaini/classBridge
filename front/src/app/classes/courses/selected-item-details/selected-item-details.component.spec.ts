import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedItemDetailsComponent } from './selected-item-details.component';

describe('SelectedItemDetailsComponent', () => {
  let component: SelectedItemDetailsComponent;
  let fixture: ComponentFixture<SelectedItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
