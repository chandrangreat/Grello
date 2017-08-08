import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BoardService {

  private Url;
  private headers;
  private result;

  constructor(private http: Http) {

    this.Url = `http://localhost:3000/boards`;

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

  }

  getBoard(shortId: String): Promise <any> {
    // console.log('Short Id of the Board ' + shortId);
    return this.http.get(`${this.Url}/${shortId}`, { headers: this.headers } )
             .toPromise();
            // .then(response => {
            //   this.result = response.json().data;
            //   console.log(this.result);
            // })
             // .catch(this.handleError.bind(this));
  }

  getAllBoards(): Promise <any> {
    return this.http.get(`${this.Url}`, { headers: this.headers })
                .toPromise();
  }

  renameBoard(boardName: string, boardId: string): Promise <any> {
    return this.http.put(`${this.Url}/${boardId}`, {name: boardName}, { headers: this.headers })
                .toPromise();
  }

  deleteBoard(boardId: string) {
    return this.http.delete(`${this.Url}/${boardId}`, { headers: this.headers })
                .toPromise();
  }

}
