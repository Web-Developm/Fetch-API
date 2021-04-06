import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { SubChildComponent } from './sub-child/sub-child.component';

import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    SubChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
