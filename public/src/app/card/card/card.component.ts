import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: any;
  @Input() listId: string;

  constructor() { }

  ngOnInit() {
  }

  checkIfCardBelongsToList(listId) {
    if ( this.listId === listId ) {
      return true;
    } else { return false; }
  }

}
