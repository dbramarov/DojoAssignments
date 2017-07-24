import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {
  @Input() myFood;
  @Output() myEvent = new EventEmitter();
  @Output() deleteFood = new EventEmitter();

  fruit = {food:''};

  onSubmit(){
  	this.myEvent.emit(this.fruit);
  	this.fruit = {food:''};
  }

  delete(){
  	this.deleteFood.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
