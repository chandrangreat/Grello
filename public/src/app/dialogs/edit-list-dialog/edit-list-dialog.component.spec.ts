import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListDialogComponent } from './edit-list-dialog.component';

describe('EditListDialogComponent', () => {
  let component: EditListDialogComponent;
  let fixture: ComponentFixture<EditListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
