import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  welcomeTitle: String;

  public constructor ( private titleService: Title) {
    titleService.setTitle(environment.title);
    this.welcomeTitle =  'Grello';
  }

  addBoardShow() {
    alert('Hell');
  }
}
