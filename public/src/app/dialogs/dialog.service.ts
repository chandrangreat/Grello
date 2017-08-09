import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class DialogService {

  private boardUrl;
  private listUrl;
  private headers;

  constructor(private http: Http, private router: Router, private snackbar: MdSnackBar ) {

    this.boardUrl = 'http://localhost:3000/boards';
    this.listUrl = 'http://localhost:3000/lists';

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

   }

  addBoardName(name: String): Promise <any> {
    // console.log('Name of the Board ' + name);
    return this.http.post(this.boardUrl, JSON.stringify({
                name: name
            }), { headers: this.headers } )
            .toPromise()
            .then(response => {
              const reply = response.json().data;
              this.router.navigate([ reply.shortUrl ]);
            })
            .catch(this.handleError.bind(this));
  }

  editListName(boardId: string, listId: string, listName: string) {
    return this.http.put(`${this.listUrl}/${boardId}`, JSON.stringify({
                listId: listId,
                listName: listName
              }), { headers: this.headers })
              .toPromise();
  }

  deleteList(boardId: string, listId: string) {
    return this.http.delete(`${this.listUrl}/${boardId}/${listId}`, { headers: this.headers })
              .toPromise();
  }

  public handleError(error: any): Promise <any> {
    this.snackbar.open('Board not Created', 'OK', { duration: 5000 });
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
