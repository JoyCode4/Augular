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

  getColor(country:string):string{
    switch(country){
      case "USA": return "blue";
      case "UK": return "green";
      case "Canada": return "red";
      case "Australia": return "brown";
      case "India": return "purple";
      default: return "black";
    }
  }

  countryDetails:Country[]=[
    {country: "USA", people:[{name:"John Doe"},{name:"Jane"},{name:"Michael"},{name:"Emily"}]},
    {country: "UK", people:[{name:"Sam"},{name:"Sarah"},{name:"Tom"},{name:"Jessica"}]},
    {country: "Canada", people:[{name:"Bob"},{name:"Alice"},{name:"Daniel"},{name:"Eric"}]},
    {country: "Australia", people:[{name:"Fred"},{name:"Grace"},{name:"Henry"},{name:"Ivy"}]},
    {country: "India", people:[{name:"Joe"},{name:"Karen"},{name:"Lisa"},{name:"Mike"}]}
  ]

  people:Person[]=[
    {name:"John Doe", country:"USA"},
    {name:"Jane Smith", country:"UK"},
    {name:"Michael Johnson", country:"Canada"},
    {name:"Emily Davis", country:"Australia"},
    {name:"Joe Brown", country:"India"},
    {name:"Grace Thompson", country:"Australia"},
    {name:"Mike Wilson", country:"India"},
    {name:"Karen Wilson", country:"USA"},
  ]
}
interface Student{
  id:number,
  name:string,
  gender:string,
  age:number,
  course:string
}

interface Country{
  country:string,
  people:People[]
}

interface People{
  name:string,
}

interface Person{
  name:string,
  country:string
}
