import { Component } from '@angular/core';
import { createSatellites } from '../interfaces/createSatellite';
import { Router } from '@angular/router';
import { SatellitesService } from '../service/satellites.service';

@Component({
  selector: 'app-satellite-form',
  templateUrl: './satellite-form.component.html',
  styleUrls: ['./satellite-form.component.css']
})
export class SatelliteFormComponent {
  constructor(private router: Router, private satelliteService: SatellitesService){}

  public satelliteForm: createSatellites={
    name: '',
    size: 0,
    planetId: 0,
    image: 'https://qph.cf2.quoracdn.net/main-qimg-9ba0d3f6deadc318181151a26b06e5e3-lq'
  }

  createSatellite(){
    console.log(this.satelliteForm);
    this.satelliteService.createSatellite(this.satelliteForm).subscribe(data => {
      console.log(data);
    })
    //this.router.navigate(['/home']);

  }
}
