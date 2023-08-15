import { Component, OnInit } from '@angular/core';
import { SatellitesService } from '../service/satellites.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-satellite',
  templateUrl: './satellite.component.html',
  styleUrls: ['./satellite.component.css']
})
export class SatelliteComponent implements OnInit {
  satelliteName: string = '';

  constructor(public satelliteService: SatellitesService, private route: ActivatedRoute, private Location: Location){}

  ngOnInit(): void{
    this.route.params.subscribe(params => this.satelliteName = params['satelliteName']);
    this.satelliteService.getSatellite(this.satelliteName).subscribe(data => {
      this.satelliteService.satelliteData = data;
      console.log(this.satelliteService.satelliteData)
    })
  }


  goBack(){
    this.Location.back();
  }
}
