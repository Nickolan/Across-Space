import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../service/planets.service';
import { Location } from '@angular/common';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  planetName: string = '';
  constructor(private route: ActivatedRoute, 
    public planetsService: PlanetsService, 
    private location: Location,
    private component: AppComponent, 
    private router: Router
    ) {}

  ngOnInit() {
    this.route.params.subscribe(params => this.planetName = params['planetName']);
    this.planetsService.getPlanetbyName(this.planetName).subscribe(data => {
      this.planetsService.onePlanet = data;
      this.planetsService.onePlanet = this.planetsService.onePlanet[0]
      console.log(this.planetsService.onePlanet)
    })


  }

  goBack() {
    this.location.back();
  }
}
