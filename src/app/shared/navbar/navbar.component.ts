import { Component } from '@angular/core';
import { PlanetsService } from 'src/app/service/planets.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  search: string = ''

  constructor(private planetsService: PlanetsService){}

  submit(){
    console.log(this.search);
    this.planetsService.getPlanetbyName(this.search).subscribe(data => {
      this.planetsService.dataFromApi = data;
      console.log(this.planetsService.dataFromApi)
    })
  }

  getAll(){
    this.planetsService.getPlanets().subscribe(data => {
      this.planetsService.dataFromApi = data;
      console.log(this.planetsService.dataFromApi)
    })
  }
}
