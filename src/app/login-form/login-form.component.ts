import { Component } from '@angular/core';
import { user } from '../interfaces/user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private router: Router,
    private comp: AppComponent){}

  example: user[] = [
    {
      email: 'nico@gmail.com',
      password: 'prueba1'
    },
    {
      email: 'santiago@gmail.com',
      password: 'test2'
    }
  ]

  userForm: user = {
    email: '',
    password: '',
  }

  procesar(){
    if (this.example.find(user => user.email === this.userForm.email && user.password === this.userForm.password)) {
      this.router.navigate(['/home'])
      //this.comp.loged = true;
      console.log('Access granted');
    } else{
      console.log('Access denied');
      
    }
  }

  login(){
  }
}
