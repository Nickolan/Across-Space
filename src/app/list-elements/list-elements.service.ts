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
      image: 'https://i.pinimg.com/originals/a1/01/e2/a101e22fc458c1110d418ee309f240c8.png'
    },
    {
      name: 'asteroid',
      image: 'https://www.pngmart.com/files/4/Asteroid-PNG-Photos.png'
    },
    {
      name: 'Sun',
      image: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2714.png'
    },
    {
      name: 'Earth',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png'
    },
    {
      name: 'Urano',
      image: 'https://static.vecteezy.com/system/resources/previews/011/178/729/original/uranus-elements-of-this-image-furnished-by-nasa-free-png.png'
    },
    {
      name: 'Kepler-452b',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Kepler-452b.png'
    },
    {
      name: 'Earth',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png'
    },
    {
      name: 'Urano',
      image: 'https://static.vecteezy.com/system/resources/previews/011/178/729/original/uranus-elements-of-this-image-furnished-by-nasa-free-png.png'
    },
    {
      name: 'Kepler-452b',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Kepler-452b.png'
    }
  ];
}
