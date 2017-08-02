import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdListItem, MdLine, MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css'],
  providers: [ ListService ]
})
export class AddListComponent implements OnInit {

  private formShow: Boolean;
  private listName: String;

  @Input() boardId: string;
  @Output() newList = new EventEmitter<object>();

  constructor(private iconRegistry: MdIconRegistry, private sanitizer: DomSanitizer, private listService: ListService) {
    iconRegistry.addSvgIcon(
      'close',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/ic_close_white_36px.svg')
    );
   }

  ngOnInit() {
    this.formShow = false;
  }

  showForm() {
    this.formShow = true;
  }

  hideForm() {
    this.formShow = false;
    this.listName = '';
  }

  saveList() {
    //  HTTP call to be done
    this.listService.addList(this.listName, this.boardId).then(response => {
      if (response.json().success === true) {
        this.newList.emit(response.json().data);
        this.hideForm();
      }
    });
  }

}
