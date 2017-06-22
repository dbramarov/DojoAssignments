import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  username = {
  	name: ""
  }
  tasks = [];
  score = 0;

  constructor(private _httpService: HttpService){}

  getTasks(){
    this._httpService.retrieveTasks(this.username.name)
    .then( tasks => { this.tasks = tasks 
    	this.score = tasks.public_repos + tasks.followers;
    })
    .catch( err => { console.log(err); })
  }  
}
