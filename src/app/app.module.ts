import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { NotyfModule } from 'ng-notyf';
import { HttpClientModule } from '@angular/common/http';
import { NivelesService } from './providers/niveles.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotyfModule
  ],
  providers: [
    NivelesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
