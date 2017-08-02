import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  providers: [ CardService ]
})
export class AddCardComponent implements OnInit {

  private formShow: Boolean;
  private cardName: String;
  @Input() boardId: String;
  @Input() listId: String;

  @Output() newCard = new EventEmitter<object>();

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.formShow = false;
  }

  showForm() {
    this.formShow = true;
  }

  hideForm() {
    this.formShow = false;
    this.cardName = '';
  }

  cardNameSubmit() {
    this.cardService.addCard(this.cardName, this.boardId, this.listId)
        .then( response => {
            if ( response.json().success === true ) {
              // console.log(response.json());
              const resObject = {
                'cardName': this.cardName,
                'listId': this.listId
              };
              this.hideForm();
              this.newCard.emit(resObject);
            }

        });
  }

}
