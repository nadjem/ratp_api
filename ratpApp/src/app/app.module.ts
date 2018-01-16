import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TableauComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
