import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';
import 'rxjs/add/operator/filter';
import { BoardService } from './board.service';
import { ListContainerComponent } from '../list/list-container/list-container.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ BoardService ]
})
export class BoardComponent implements OnInit {
  id: string;
  data: any;
  serviceResponse: any;
  renameFormShow: boolean;
  renameField: string;
  boardName: string;
  deleteFormShow: boolean;

  constructor( private route: ActivatedRoute,
               private titleService: Title,
               private boardService: BoardService,
               private router: Router,
               private snackbar: MdSnackBar ) {
    this.renameFormShow = false;
    this.deleteFormShow = false;
   }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.boardService.getBoard(this.id).then(response => {
              this.data = response.json().data;
              this.titleService.setTitle(this.data.name + ' | Grello');
            }).catch(this.handleError.bind(this));
      });
  }

  public handleError(error: any): Promise <any> {
    // console.error('An error occurred', error);
    this.router.navigate([ '**' ]);
    return Promise.reject(error.message || error);
  }

  showRenameForm() {
    this.renameFormShow = true;
  }

  closeRenameBox() {
    this.renameFormShow = false;
    this.renameField = '';
  }

  saveRenameField() {
    this.boardService.renameBoard(this.renameField, this.id)
                      .then(response => {
                       const responseObject = response.json();
                       if (responseObject.success === 'true') {
                         this.data = responseObject.data;
                         this.titleService.setTitle(this.data.name + ' | Grello');
                       }
                      });
    this.closeRenameBox();
  }

  deleteBoard() {
    this.boardService.deleteBoard(this.id)
                      .then( response => {
                        const responseObject = response.json();
                        if (responseObject.success === 'true') {
                            this.snackbar.open('Board ' + responseObject.data.name + ' has been deleted', 'OK', { duration: 5000 });
                            this.router.navigate([ '' ]);
                        }
                      });
  }

  showConfirmDeleteBoard() {
    this.deleteFormShow = true;
  }

  closeConfirmDeleteBoard() {
    this.deleteFormShow = false;
  }

}
