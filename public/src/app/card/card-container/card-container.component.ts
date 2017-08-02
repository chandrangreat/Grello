import { Component, OnInit } from '@angular/core';
import { AddCardComponent } from '../add-card/add-card.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
