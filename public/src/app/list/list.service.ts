import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListService {

  private Url;
  private headers;
  private body;

  constructor(private http: Http) {
    this.Url = 'http://localhost:3000/lists';

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
   }

  addList(listName: String, boardId: String) {
    // console.log(listName);
    // console.log(boardId);
    this.body = {
      listName: listName,
      boardId: boardId
    };
    return this.http.post(`${this.Url}`, JSON.stringify(this.body), { headers: this.headers })
            .toPromise(); // Need to implement the correct functionality
  }

}
