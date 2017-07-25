import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

	cityCode: number = 5186266;
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
