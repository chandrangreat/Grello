import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule
  ]
})

export class MaterialModule {
}
