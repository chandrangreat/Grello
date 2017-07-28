import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { BoardService } from './board.service';
import { ListContainerComponent } from '../list/list-container/list-container.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ BoardService ]
})
export class BoardComponent implements OnInit {
  id: string;
  data: any;
  serviceResponse: any;

  constructor( private route: ActivatedRoute, private titleService: Title, private boardService: BoardService, private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.boardService.getBoard(this.id).then(response => {
              this.data = response.json().data;
              this.titleService.setTitle(this.data.name + ' | Grello');
            }).catch(this.handleError.bind(this));
      });
  }

  public handleError(error: any): Promise <any> {
    // console.error('An error occurred', error);
    this.router.navigate([ '**' ]);
    return Promise.reject(error.message || error);
  }


}
