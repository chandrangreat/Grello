import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoardService } from '../../board/board.service';
import { AddBoardDialogComponent } from '../../dialogs/add-board-dialog/add-board-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-home-boards',
  templateUrl: './home-boards.component.html',
  styleUrls: ['./home-boards.component.css'],
  providers: [ BoardService ]
})
export class HomeBoardsComponent implements OnInit {

  private boards;
  // private bgColors = ['#D2B9D3', '#F9B7FF', '#E6A9EC', '#EDC9AF', '#F9966B', '#FFF380', '#9AFEFF'];
  private bgColors = ['#FF7043'];
  constructor(private boardService: BoardService, private titleService: Title, private dialog: MdDialog) {
    this.titleService.setTitle('Boards | Grello');
   }

  ngOnInit() {
    this.boardService.getAllBoards().then(response => {
        this.boards = response.json().data;
        // console.log(this.boards);
    });
  }

  getBGColor() {
    // return this.bgColors[Math.floor(Math.random() * 7)];
    return this.bgColors[0];
  }

  addBoardDialog() {
    const dialog = this.dialog.open(AddBoardDialogComponent);
  }

}
