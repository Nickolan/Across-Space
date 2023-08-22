import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { elements } from '../interfaces/elements';
import { Observable } from "rxjs";
import { planets } from '../interfaces/createPlanet';
@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  BASE_URL = 'http://localhost:3000';
  dataFromApi: any;
  onePlanet: any;
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<elements[]>{
    let response = this.http.request<elements[]>('GET', `${this.BASE_URL}/planets`);
    return response;
  }
  getPlanet(planetId: string): Observable<elements>{
    return this.http.get<elements>(`${this.BASE_URL}/planets/${planetId}`)
  }

  getPlanetbyName(planetName: string): Observable<elements>{
    return this.http.get<elements>(`${this.BASE_URL}/planets/name/${planetName}`)
  }
  createPlanet(Planet:planets): Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/planets`, Planet)
  }
  detelPlanet(id: number){}
}
