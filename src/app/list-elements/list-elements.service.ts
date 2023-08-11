import { Injectable } from '@angular/core';
import { elements } from '../interfaces/elements';

@Injectable({
  providedIn: 'root'
})

export class ListElementsService {

  constructor() { }

  elements: elements[] = [
    {
      name: 'Mars',
      size: 6,
      image: 'https://www.pngmart.com/files/21/Mars-Planet-PNG-File.png',
      distancewWithEarth: 6
    },
  ];

  bringAll(){
   fetch('http://localhost:3000/planets')
   .then(response => response.json())
   .then(json => json.data);
  }

}
