import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
