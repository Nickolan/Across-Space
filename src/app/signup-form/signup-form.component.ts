import { Component } from '@angular/core';
import { user } from '../interfaces/user';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  userForm: user = {
    email: '',
    username: '',
    password: '',
  }

  procesar(){
    console.log(this.userForm)
  }
}
