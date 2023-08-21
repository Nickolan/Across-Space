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
    image: '',
    size: 0,
    distancewWithEarth: 0
  }

}
