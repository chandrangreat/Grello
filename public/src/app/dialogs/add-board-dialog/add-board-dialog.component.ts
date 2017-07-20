import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-add-board-dialog',
  templateUrl: './add-board-dialog.component.html',
  styleUrls: ['./add-board-dialog.component.css'],
  providers: [DialogService] // Can also use the same thing in a Module and make the service globally available rather than in a component
})
export class AddBoardDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<AddBoardDialogComponent>, private dialogService: DialogService) { }

  nameOfBoard: string;

  ngOnInit() {
  }

  getBoardName() {
    this.dialogRef.close(this.nameOfBoard);
    const boardName = this.nameOfBoard;
    this.dialogService.addBoardName(boardName);
  }

}
