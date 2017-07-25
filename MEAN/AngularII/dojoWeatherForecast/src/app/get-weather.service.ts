import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()

export class GetWeatherService {
  constructor(private _http: Http) { }
  retrieveWeather(city){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?id='+ city + '&units=imperial&APPID=8c47c89296dac0ffbd1be529a545fd12').map(data=>data.json()).toPromise()
  }
  
}
