import { Component, OnInit, Input } from '@angular/core';
import { CardContainerComponent } from '../../card/card-container/card-container.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() boardId: String;
  @Input() list: any;
  @Input() cards: any;
  constructor() { }

  ngOnInit() {
  }

  newCard(card) {
    // console.log(card);
    this.cards.push(card);
  }

}
