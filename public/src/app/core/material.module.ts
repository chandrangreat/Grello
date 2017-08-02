import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule,
  MdListModule,
  MdLineModule,
  MdIconModule,
  MdCardModule,
  MdGridListModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule,
    MdListModule,
    MdLineModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule,
    MdListModule,
    MdLineModule,
    MdIconModule,
    MdCardModule,
    MdGridListModule
  ]
})

export class MaterialModule {
}
