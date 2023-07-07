import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {

  @Input()items!:Observable<any>;
  // gaming/ desktop/acc
  @Input()category1: string='';
  // laptop.desktop/ regular
  @Input()category2: string='';

}
