import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-edit-list-dialog',
  templateUrl: './edit-list-dialog.component.html',
  styleUrls: ['./edit-list-dialog.component.css'],
  providers: [ DialogService ]
})
export class EditListDialogComponent implements OnInit {

  nameOfList: string;

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
              public dialogService: DialogService,
              public dialogRef: MdDialogRef<EditListDialogComponent>) { }

  ngOnInit() {
  }

  submitListName() {
    this.dialogService.editListName(this.data.boardId, this.data.listId, this.nameOfList)
                      .then( response => {
                          if (response.json().success === true) {
                             this.dialogRef.close(response.json());
                          }
                        });
  }

}
