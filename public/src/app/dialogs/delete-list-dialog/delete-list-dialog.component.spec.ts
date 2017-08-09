import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteListDialogComponent } from './delete-list-dialog.component';

describe('DeleteListDialogComponent', () => {
  let component: DeleteListDialogComponent;
  let fixture: ComponentFixture<DeleteListDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteListDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
