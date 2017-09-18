import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    signupForm: FormGroup;
    allForms = [];

    ngOnInit() {
        this.signupForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'remember': new FormControl(false)
        })
    }

    onSubmit() {
        console.log(this.signupForm);
        this.allForms.push(this.signupForm);
        this.signupForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
            'remember': new FormControl(false)
        })
        // this.signupForm.reset();
    }
}
