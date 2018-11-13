import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientsMainComponent } from './clients-main/clients-main.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { InputComponent } from './input/input.component';
import { ClientDetailsComponent } from './client-details/client-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsMainComponent,
    ClientsListComponent,
    InputComponent,
    ClientDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
