import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CardService {

  private headers;
  private Url;
  private body;

  constructor( private http: Http) {

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

    this.Url = 'http://localhost:3000/cards';

   }

  addCard(cardName, boardId, listId) {

    this.body = {
      cardName: cardName,
      boardId: boardId,
      listId: listId
    };

    return this.http.post(`${this.Url}`, JSON.stringify(this.body), {headers: this.headers})
                    .toPromise();
  }

}
