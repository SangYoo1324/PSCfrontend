import {Input, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import {ItemListComponent} from "./item-list.component";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    ItemListComponent
  ]
})
export class ItemListModule {


}
