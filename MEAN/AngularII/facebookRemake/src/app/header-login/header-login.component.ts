import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {

  constructor() { }

  user = {
  	username: '',
  	password: ''
  }

  onSubmit(){
  	alert("This is not Facebook! This was created as a practice project by Dorian Bramarov using Angular2. Your username is '" + this.user.username + "' and password is '" + this.user.password + "' ...Thanks! :)")
  	this.user = {
  	username: '',
  	password: ''
    }
  }

  ngOnInit() {
  }

}
