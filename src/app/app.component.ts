import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Application';
  name="";
  students:Student[]=[];
  // @HostListener("click",['$event'])
  // show(){
  //   alert("hello....!");
  // }
  isValid:boolean=true;

  constructor(){
    this.students=[{id:1,name: "Student1",gender:"M",age:24,course:"BCA"},{id:2,name: "Student2",gender:"F",age:22,course:"MBA"},{id:3,name: "Student3",gender:"M",age:26,course:"BSc"},{id:4,name: "Student4",gender:"F",age:20,course:"MCA"}];
  }
  changeValue(isValid:boolean){
    this.isValid=isValid;
  }

  setName(val:string){
    this.name=val;
    console.log(val)
    console.log(this.name)
  }

  getMoreData(){
    this.students=[{id:1,name: "Student1",gender:"M",age:24,course:"BCA"},{id:2,name: "Student2",gender:"F",age:22,course:"MBA"},{id:3,name: "Student3",gender:"M",age:26,course:"BSc"},{id:4,name: "Student4",gender:"F",age:20,course:"MCA"},{id:5,name: this.name, gender:"M",age:25,course:"BCA"}];
  }

  trackById(index:number,student:Student):number{
    return student.id;
  }
}
interface Student{
  id:number,
  name:string,
  gender:string,
  age:number,
  course:string
}
