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
    FormsModule
  ],
  // here, servidce is provided in app module so that it can be used in all the component.
  // providers: [MessageService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
