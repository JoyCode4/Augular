import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Application';
  name="";
  // @HostListener("click",['$event'])
  // show(){
  //   alert("hello....!");
  // }
  isValid:boolean=true;

  changeValue(isValid:boolean){
    this.isValid=isValid;
  }

  setName(val:string){
    this.name=val;
    console.log(val)
    console.log(this.name)
  }

  students:Student[]=[{id:1,name: "Student1"},{id:2,name: "Student2"},{id:3,name: "Student3"},{id:4,name: "Student4"}];
}
interface Student{
  id:number,
  name:string,
}
