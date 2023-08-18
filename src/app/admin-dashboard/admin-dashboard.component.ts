import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  access: boolean = false;
  constructor(private router: Router, private appComp: AppComponent, private userService: UsersService){}
  
  ngOnInit() {
    console.log(this.userService.userResponse);
    if (this.userService.userResponse.Access === false) {
      this.router.navigate(['/home'])
    }
    this.access = this.userService.userResponse.Access;
  }


}
