import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authenticate(email:string,password:string){
    if(email=="admin" && password=="admin"){
      alert("Successfully Logged In");
      localStorage.setItem('loggedIn','true');
    }
    else{
      alert("Invalid Email or Password");
      localStorage.setItem('loggedIn','false');
    }
  }
}
