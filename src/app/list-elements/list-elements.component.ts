import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit {

  

  constructor(public planetsService: PlanetsService){}
  
  
  
  ngOnInit(): void{
    this.planetsService.getPlanets().subscribe(data => {
      this.planetsService.dataFromApi = data;
      console.log(this.planetsService.dataFromApi)
    })
  }

  
}
