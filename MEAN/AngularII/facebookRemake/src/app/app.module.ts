import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { UsersService } from './users.service';

import { AppComponent } from './app.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { BodyLoginComponent } from './body-login/body-login.component';
import { FooterLoginComponent } from './footer-login/footer-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderLoginComponent,
    BodyLoginComponent,
    FooterLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
