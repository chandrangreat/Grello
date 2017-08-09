import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-delete-list-dialog',
  templateUrl: './delete-list-dialog.component.html',
  styleUrls: ['./delete-list-dialog.component.css'],
  providers: [ DialogService ]
})
export class DeleteListDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any,
               public dialogService: DialogService,
               public dialogRef: MdDialogRef<DeleteListDialogComponent>) { }

  ngOnInit() {
  }

  deleteList() {
    this.dialogService.deleteList(this.data.boardId, this.data.listId)
                      .then( response => {
                          if (response.json().success === true) {
                             this.dialogRef.close(response.json());
                          }
                        });
  }

}
