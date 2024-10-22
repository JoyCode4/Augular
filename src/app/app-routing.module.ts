import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // page not found wild card route should be at the last of routing
  // {path:"",redirectTo:"student",pathMatch:"full"},
  {path:"student",component:StudentComponent},
  {path:"studentdetails",component:StudentDetailsComponent},
  // {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
