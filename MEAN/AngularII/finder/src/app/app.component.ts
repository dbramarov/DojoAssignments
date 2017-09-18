import { Component } from '@angular/core';
import { FullContactService } from './full-contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= 'Project FindR';
  info = [];
  person = {
    email: '',
    phone: ''
  };
  emailErr: any;
  phoneErr: any;

  constructor(private _httpService: FullContactService) {}

  onSubmitE() {
      this._httpService.retrievePersonEmail(this.person.email)
      .then( info => {this.info = info})
      .catch( err => { this.emailErr = err })
      this.person = {
          email: '',
          phone: ''
      }
  }

  // onSubmitP() {
  //   this._httpService.retrievePersonPhone(this.person.phone)
  //   .then( info => { this.info = info })
  //   .catch( err => { this.phoneErr = err })
  //   this.person = {
  //       email: '',
  //       phone: ''
  //   }
  // }

};
