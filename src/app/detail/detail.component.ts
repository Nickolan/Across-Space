import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetsService } from '../service/planets.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  planetId: string = '';
  constructor(private route: ActivatedRoute, public planetsService: PlanetsService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.planetId = params['planetId']);
    this.planetsService.getPlanet(this.planetId).subscribe(data => {
      this.planetsService.onePlanet = data;
      console.log(this.planetsService.onePlanet)
    })
  }
}
