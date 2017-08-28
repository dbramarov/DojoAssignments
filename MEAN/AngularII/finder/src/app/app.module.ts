import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullContactService } from './full-contact.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FullContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
