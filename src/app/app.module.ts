import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipePipe } from './custompipe.pipe';
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { NumlistService } from './numlist.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    Comp1Component,
    Comp2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // here, servidce is provided in app module so that it can be used in all the component.
  providers: [NumlistService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
