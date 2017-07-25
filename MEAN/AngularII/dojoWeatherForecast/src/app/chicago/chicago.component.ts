import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

	cityCode: number = 4887398;
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
