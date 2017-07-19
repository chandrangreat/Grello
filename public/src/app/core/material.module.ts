import {
  MdMenuModule,
  MdToolbarModule,
  MdButtonModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdButtonModule
  ]
})

export class MaterialModule {
}
