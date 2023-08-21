import { Component } from '@angular/core';
import { elements } from '../interfaces/elements';
import { PlanetsService } from '../service/planets.service';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent {
  constructor(private planetsService: PlanetsService){}

  planetForm: elements = {
    name: '',
    image: 'https://as2.ftcdn.net/v2/jpg/02/38/07/05/1000_F_238070572_jZPyRoBrHH7RicstomDgzUQuN2r9w5HW.jpg',
    size: 0,
    distancewWithEarth: 0
  }


  createPlanet(){
    this.planetsService.createPlanet(this.planetForm)
  }

}
