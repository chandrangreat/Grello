import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  constructor() { }

  addBoardName(name: String) {
    console.log('Name of the Board ' + name);
  }

}
