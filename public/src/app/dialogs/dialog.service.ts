import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class DialogService {

  private Url;
  private headers;

  constructor(private http: Http, private router: Router, private snackbar: MdSnackBar ) {

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
            .then(response => {
              const reply = response.json().data;
              this.router.navigate([ reply.shortUrl ]);
            })
            .catch(this.handleError.bind(this));
  }

  public handleError(error: any): Promise <any> {
    this.snackbar.open('Board not Created', 'OK', { duration: 5000 });
    // console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
