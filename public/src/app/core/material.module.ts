import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule,
  MdListModule,
  MdLineModule,
  MdIconModule
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
    MdIconModule
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
    MdIconModule
  ]
})

export class MaterialModule {
}
