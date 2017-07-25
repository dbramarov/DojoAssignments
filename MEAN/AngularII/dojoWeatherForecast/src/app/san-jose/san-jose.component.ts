import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {

	cityCode: number = 4726311;
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
