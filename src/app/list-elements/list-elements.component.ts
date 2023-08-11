import { Component, OnInit } from '@angular/core';
import { ListElementsService } from './list-elements.service';
import { PlanetsService } from '../service/planets.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit {

  constructor(public listElementsService: ListElementsService,
    private planetsService: PlanetsService){}
  ngOnInit(): void{
    this.bringAll()
  }

  bringAll(){
    this.planetsService.getPlanets()
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
