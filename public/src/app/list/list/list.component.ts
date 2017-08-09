import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardContainerComponent } from '../../card/card-container/card-container.component';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import { MdDialog } from '@angular/material';
import { EditListDialogComponent } from '../../dialogs/edit-list-dialog/edit-list-dialog.component';
import { DeleteListDialogComponent } from '../../dialogs/delete-list-dialog/delete-list-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() boardId: String;
  @Input() list: any;
  @Input() board: any;
  @Input() cards: any;

  @Output() editList = new EventEmitter<object>();
  @Output() deleteList = new EventEmitter<object>();

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, public dialog: MdDialog) {
    iconRegistry.addSvgIcon(
      'vertical-menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_more_vert_black_24px.svg')
    );
   }

  ngOnInit() {
  }

  newCard(card) {
    // console.log(card);
    this.cards.push(card);
  }

  getEditListModal(boardId: string, listId: string, listName: string) {
    const dialog = this.dialog.open(EditListDialogComponent, {
      data: {
        boardId: boardId,
        listId: listId,
        listName: listName
      }
    });
    dialog.afterClosed().subscribe(result => {
      this.editList.emit(result.data.lists);
    });
  }

  getConfirmDeleteModal(boardId: string, listId: string, listName: string) {
    console.log(boardId);
    const dialog = this.dialog.open(DeleteListDialogComponent, {
      data: {
        boardId: boardId,
        listId: listId,
        listName: listName
      }
    });
    dialog.afterClosed().subscribe(result => {
      this.deleteList.emit(result.data.lists);
    });
  }

}
