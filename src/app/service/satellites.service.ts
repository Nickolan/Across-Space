import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { satellites } from '../interfaces/satellites';
import { Observable } from 'rxjs';
import { createSatellites } from '../interfaces/createSatellite';
@Injectable({
  providedIn: 'root'
})
export class SatellitesService {

  BASE_URL = 'http://localhost:3000';

  satelliteData: any;

  constructor(private http: HttpClient) { }
 
  getSatellite(satelliteName: string): Observable<satellites>{
    return this.http.get<satellites>(`${this.BASE_URL}/satellites/${satelliteName}`)
  }

  createSatellite(satellite: createSatellites): Observable<satellites>{
    return this.http.post<satellites>(`${this.BASE_URL}/satellites`, satellite)
  }
}
