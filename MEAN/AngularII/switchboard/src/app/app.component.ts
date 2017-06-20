import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './main/main.component.html',
  styleUrls: ['./main/main.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  boxes = [false,false,false,false,false,false,false,false,false,false];

  color(num) {
  	console.log(num);
  	this.boxes[num] = !this.boxes[num];
  }

}

