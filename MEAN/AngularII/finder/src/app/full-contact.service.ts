import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()

export class FullContactService {
  constructor(private _http: Http) { };

  retrievePersonEmail(email) {
  	return this._http.get('https://api.fullcontact.com/v2/person.json?email=' + email + '&apiKey=3b5f5b40c27640d3').map(data=>data.json()).toPromise()
  };
  retrievePersonPhone(phone) {
    return this._http.get('https://api.fullcontact.com/v2/person.json?phone=+1' + phone + '&apiKey=3b5f5b40c27640d3').map(data=>data.json()).toPromise()
  };
}
