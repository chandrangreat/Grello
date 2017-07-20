import { Component, OnInit } from '@angular/core';
import { AddBoardDialogComponent } from '../../dialogs/add-board-dialog/add-board-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  addBoardDialog() {
    const dialog = this.dialog.open(AddBoardDialogComponent);
  }

}
