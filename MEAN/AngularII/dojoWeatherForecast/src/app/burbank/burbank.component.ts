import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

	cityCode: number = 5331835;
	info = [];

  constructor(private _httpService: GetWeatherService){}

  ngOnInit() {
  	this._httpService.retrieveWeather(this.cityCode)
    .then( info => { this.info = info;
    })
    .catch( err => { 
   
    })
  }

}
