import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  quote: any = {
  	qt:"",
  	author:"",
  	votes: 0
  };
  quotes = [];
  onSubmit(){
  	this.quotes.push(this.quote);
  	this.quote = {
	  	qt:"",
	  	author:"",
	  	votes: 0
  	}
  }
  up(idx){
  	this.quotes[idx].votes += 1;
  }
  down(idx){
  	this.quotes[idx].votes -=1;
  }
  delete(idx){
  	this.quotes.splice(idx, 1);
  }
}

