import { Component } from '@angular/core';
import { PlanetsService } from '../service/planets.service';
import { planets } from '../interfaces/createPlanet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent {
  constructor(private planetsService: PlanetsService, private router: Router){}

  planetForm: planets = {
    name: '',
    size: 3,
    image: 'https://i.pinimg.com/474x/86/77/7e/86777e0a74d4ae01ee489fe74cf74d5b.jpg',
    distanceWithEarth: 0
  }


  createPlanet(){
    console.log(this.planetForm);
    this.planetsService.createPlanet(this.planetForm).subscribe(data => {
      console.log(data);
    })
    this.router.navigate(['/home']);

  }

}
