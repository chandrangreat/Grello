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

const routes: Routes = [
  { path: '', component: WelcomeComponent },
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
    BoardComponent
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
  entryComponents: [AddBoardDialogComponent]
})
export class AppModule { }
