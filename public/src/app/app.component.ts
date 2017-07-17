import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: String;

  public constructor ( private titleService: Title) {
    titleService.setTitle(environment.title);
    this.title =  'Grello';
  }

  addBoardShow() {
    alert('Hell');
  }
}
