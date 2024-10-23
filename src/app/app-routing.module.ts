import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { authguardGuard } from './authguard.guard';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { studentguardGuard } from './studentguard.guard';
// import { StudentComponent } from './student/student.component';
// import { StudentDetailsComponent } from './student-details/student-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // page not found wild card route should be at the last of routing
  // {path:"",redirectTo:"student",pathMatch:"full"},
  // {path:"student",component:StudentComponent},
  // {path:"studentdetails",component:StudentDetailsComponent},
  // {path:"**",component:PageNotFoundComponent}

  /*
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canActivate: [authguardGuard],
  },
  {
    path: 'contactus',
    component: ContactusComponent,
    canActivate: [authguardGuard],
  },
  { path: 'login', component: LoginComponent },
  // with out CanActivateChild Guard
  // {path:"student",
  //   children:[
  //     {path:"",component:StudentComponent},
  //     {path:"details",component:StudentDetailsComponent},
  //     {path:"registration",component:StudentRegistrationComponent},
  //   ]
  // },
  // with CanActivateChild Guard
  // {
  //   path: 'student',
  //   children: [
  //     { path: '', component: StudentComponent },
  //     {
  //       path:"", canActivateChild:[studentguardGuard],
  //       children: [
  //         { path: 'details', component: StudentDetailsComponent },
  //         { path: 'registration', component: StudentRegistrationComponent },
  //       ],
  //     },
  //   ],
  // },
  //providing the same routes guard and some not guards in same route
  {
    path: 'student',
    children: [
      //without guards routes
      { path: '', component: StudentComponent },
      { path: 'registration', component: StudentRegistrationComponent },
      {
        //with guards routes
        path:"", canActivateChild:[studentguardGuard],
        children: [
          { path: 'details', component: StudentDetailsComponent },
          
        ],
      },
    ],
  },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
