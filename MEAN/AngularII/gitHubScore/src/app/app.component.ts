import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { FormsModule }   from '@angular/forms';

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
  error;

  constructor(private _httpService: HttpService){}

  getTasks(){
    this._httpService.retrieveTasks(this.username.name)
    .then( tasks => { this.tasks = tasks;
    	this.score = tasks.public_repos + tasks.followers;
      this.error = "";
    })
    .catch( err => { 
      this.error = "User Does Not Exist"; 
      this.score = 0;      
    })
  }  
}
