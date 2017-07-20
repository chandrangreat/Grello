import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DialogService {

  private Url;
  private headers;

  constructor(private http: Http) {

    this.Url = 'http://localhost:3000/boards';

    this.headers = new Headers({
      'Content-Type': 'application/json'
    });

   }

  addBoardName(name: String): Promise <any> {
    console.log('Name of the Board ' + name);
    return this.http.post(this.Url, JSON.stringify({
                name: name
            }), { headers: this.headers } )
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
  }

  private handleError(error: any): Promise <any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
