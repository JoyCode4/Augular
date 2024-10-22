import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipePipe } from './custompipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageService } from './message.service';
import { OthermessageService } from './othermessage.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipePipe,
    StudentComponent,
    StudentDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  // here, servidce is provided in app module so that it can be used in all the component.
  providers: [MessageService,OthermessageService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
