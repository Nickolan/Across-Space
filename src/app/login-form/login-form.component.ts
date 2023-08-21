import { Component } from '@angular/core';
import { user } from '../interfaces/user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private router: Router,
    private comp: AppComponent,
    public userService: UsersService){}

  userForm: user = {
    email: '',
    username: '',
    password: '',
  }

  login(){
    this.userService.adminAccess(this.userForm).subscribe(data => {
      this.userService.userResponse = data;
      console.log(this.userService.userResponse)
      if (this.userService.userResponse.Access === true) {
        this.router.navigate(['/admin/dashboard/planet']);
      }
    })
  }
}
