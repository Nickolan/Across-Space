import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { elements } from '../interfaces/elements';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  BASE_URL = 'http://localhost:3000';
  dataFromApi: any;
  onePlanet: any;
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<elements[]>{
    let response = this.http.request<elements[]>('GET', `http://localhost:3000/planets`);
    return response;
  }
  getPlanet(planetId: string): Observable<elements>{
    return this.http.get<elements>(`${this.BASE_URL}/planets/${planetId}`)
  }
  createPlanet(){}
  detelPlanet(id: number){}
}
