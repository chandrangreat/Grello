import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './core/material.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AddBoardDialogComponent } from './dialogs/add-board-dialog/add-board-dialog.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { DialogService } from './dialogs/dialog.service';
import { BoardComponent } from './board/board.component';
import { ListContainerComponent } from './list/list-container/list-container.component';
import { AddListComponent } from './list/add-list/add-list.component';
import { ListComponent } from './list/list/list.component';
import { CardContainerComponent } from './card/card-container/card-container.component';
import { AddCardComponent } from './card/add-card/add-card.component';
import { CardComponent } from './card/card/card.component';
import { HomeBoardsComponent } from './core/home-boards/home-boards.component';
import { EditListDialogComponent } from './dialogs/edit-list-dialog/edit-list-dialog.component';
import { DeleteListDialogComponent } from './dialogs/delete-list-dialog/delete-list-dialog.component';

const routes: Routes = [
  { path: '', component: HomeBoardsComponent },
  { path: 'b/:id/:name', component: BoardComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    AddBoardDialogComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    BoardComponent,
    ListContainerComponent,
    AddListComponent,
    ListComponent,
    CardContainerComponent,
    AddCardComponent,
    CardComponent,
    HomeBoardsComponent,
    EditListDialogComponent,
    DeleteListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddBoardDialogComponent, EditListDialogComponent, DeleteListDialogComponent]
})
export class AppModule { }
