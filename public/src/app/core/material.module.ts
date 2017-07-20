import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule,
  MdInputModule,
  MdDialogModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdDialogModule
  ]
})

export class MaterialModule {
}
