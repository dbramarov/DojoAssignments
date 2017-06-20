import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  valid = false;

  user = {
  	firstName: '',
  	lastName: '',
  	email: '',
  	password: '',
  	passwordconf: '',
  	street: '',
  	unit: '',
  	city: '',
  	lucky: ''
  };

  onSubmit() {
  	this.valid = true; 
  }

}
