import { Component } from '@angular/core';
import { ListElementsService } from './list-elements.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent {
  constructor(public listElementsService: ListElementsService){}
}
