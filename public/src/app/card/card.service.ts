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

  addCard(cardName) {
    console.log(cardName);

    this.body = {
      cardName: cardName
    };

    // return this.http.post()
  }

}
