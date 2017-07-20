import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardDialogComponent } from './add-board-dialog.component';

describe('AddBoardDialogComponent', () => {
  let component: AddBoardDialogComponent;
  let fixture: ComponentFixture<AddBoardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
