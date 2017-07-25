import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

	cityCode: number = 5809844;
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
