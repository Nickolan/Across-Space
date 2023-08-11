import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { elements } from '../interfaces/elements';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getPlanets(): Observable<elements[]>{
    let response = this.http.request<elements[]>('GET', `http://localhost:3000/planets`, {responseType:'json'});
    console.log(response)
    console.log('Done');
    return response;
    
    
    
    //return this.http.request<elements[]>('GET', `http://localhost:3000/planets`, {responseType:'json'});
    //return this.http.get<elements[]>(`${this.BASE_URL}/planets`)
  }
  getPlanet(id: number): Observable<elements>{
    return this.http.get<elements>(`${this.BASE_URL}/planets/${id}`)
  }
  createPlanet(){}
  detelPlanet(id: number){}
}
