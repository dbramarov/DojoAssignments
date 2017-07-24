import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	Food: any[] = [
		{food: "Bannana"}
	];

  doSomething(fruit){
  	this.Food.push(fruit);
  }

  delete(){
  	this.Food.pop();
  }
  
  constructor() { }

  ngOnInit() {
  }

}
