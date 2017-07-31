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
  MdCardModule
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
    MdCardModule
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
    MdCardModule
  ]
})

export class MaterialModule {
}
