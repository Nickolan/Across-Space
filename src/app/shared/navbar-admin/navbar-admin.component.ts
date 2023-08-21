import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent {
  constructor(private router: Router){}

  planetForm(){
    this.router.navigate(['admin/dashboard/planet']);
  }
  satelliteForm(){
    this.router.navigate(['admin/dashboard/satellite']);
  }
}
