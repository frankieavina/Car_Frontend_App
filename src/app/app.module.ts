import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarDataComponent } from './car-data/car-data.component';
import { CarsService } from './cars.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarDataComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [HttpClientModule]
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
