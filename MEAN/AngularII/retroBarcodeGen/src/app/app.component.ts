import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './barcode/barcode.component.html',
  styleUrls: ['./barcode/barcode.component.css']
})
export class AppComponent implements OnInit{
  title = 'Retro Barcode Generator';
  colors = ['Chartreuse', 'Cyan','Coral','BlueViolet','Crimson','Gold'];
  squares = [];

  array(){
  	for(var i = 0; i<108; i++){
  		var num = (Math.floor(Math.random()*6));
  		this.squares.push(this.colors[num]);
  	}
  }

  ngOnInit(){
  	this.array();
  }

}
