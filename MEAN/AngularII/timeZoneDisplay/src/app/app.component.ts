import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './time-dis/time-dis.component.html',
  styleUrls: ['./time-dis/time-dis.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  date;
  switch1: boolean = false;
  switch2: boolean = false;
  switch3: boolean = false;
  switch4: boolean = false;

  pst() {
  	this.date = new Date();
  	this.switch1 = true;
  	this.switch2 = false;
    this.switch3 = false;
    this.switch4 = false;
  }

  mst() {
  	var newTime = new Date();
  	newTime.setHours(newTime.getHours()+1);
  	this.date = newTime;
  	this.switch1 = false;
  	this.switch2 = true;
    this.switch3 = false;
    this.switch4 = false;
  }

  cst() {
  	var newTime = new Date();
  	newTime.setHours(newTime.getHours()+2);
  	this.date = newTime;
  	this.switch1 = false;
  	this.switch2 = false;
    this.switch3 = true;
    this.switch4 = false;
  }

  est() {
  	var newTime = new Date();
  	newTime.setHours(newTime.getHours()+3);
  	this.date = newTime;
  	this.switch1 = false;
  	this.switch2 = false;
    this.switch3 = false;
    this.switch4 = true;
  }

  clear() {
  	this.date = null;
  	this.switch1 = false;
  	this.switch2 = false;
  	this.switch3 = false;
  	this.switch4 = false;
  }

}
