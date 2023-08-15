import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private component: AppComponent){}

  image: string = 'https://i.pinimg.com/originals/a1/01/e2/a101e22fc458c1110d418ee309f240c8.png'

}
