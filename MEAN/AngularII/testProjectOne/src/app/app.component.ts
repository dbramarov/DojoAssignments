import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  name = {
  	fname: "Dorian",
  	lname: "Bramarov"
  };
  myArr = [ 1,2,3,4,5,6,7 ];
  myBool = true;
}
