import { Component, OnInit, OnDestroy } from '@angular/core';
// import { UsersService } from '../users.service';
// import { Subscription } from "rxjs/Subscription";
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnDestroy, OnInit {
	// subscription: Subscription;
	date;
	month;
	day;
	year;

	constructor(private _router: Router) {};

	users = [];

	user = {
		firstName: '',
		lastName: '',
		numEmail: '',
		password: '',
		bdayM: '',
		bdayD: '',
		bdayY: '',
		gender: ''
	};

	onSubmit() {
		this.users.push(this.user);
		this.user = {
			firstName: '',
			lastName: '',
			numEmail: '',
			password: '',
			bdayM: '',
			bdayD: '',
			bdayY: '',
			gender: ''
		};
		// if(!this.users){
		// 	this.temp.push(this.user);
		// 	this._usersService.updateItems(this.temp);
		// }
		// else {
		// 	this.users.push(this.user);
		// 	this._usersService.updateItems(this.users);	
		// }
		alert('Thank you for creating a profile!');
	};

	ngOnInit() {
		this.date = new Date();
		this.month = this.date.getMonth();
		this.month += 1;
		this.day = this.date.getDate();
		this.year = this.date.getFullYear();
		this.user.bdayY = this.year;
		this.user.bdayD = this.day;
		this.user.bdayM = this.month;
	}

  	ngOnDestroy() {
  		// this.subscription.unsubscribe();
  	};
}
