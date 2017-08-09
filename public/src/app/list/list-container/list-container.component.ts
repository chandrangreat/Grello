import { Component, OnInit, Input } from '@angular/core';
import { MdList } from '@angular/material';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent implements OnInit {

  @Input() boardId: string;
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

  newList(list) {
    this.data.lists.push(list);
  }

  editList(data) {
    this.data.lists = data;
  }

  deleteList(data) {
    this.data.lists = data;
  }

}
