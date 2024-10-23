import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // here the service is used for componnet so here it is provided in providers. and it can be only used for this component where it is provided.
  // providers:[MessageService]
})
export class AppComponent {
  title = 'Angular Application';
  msg:string="";
  othermsg:string="";
  name="";
  students:Student[]=[];
  // @HostListener("click",['$event'])
  // show(){
  //   alert("hello....!");
  // }
  isValid:boolean=true;
  empFirstName:string="Jayesh";
  empLastName:string="Wadhonkar";
  a:number=12;
  b:number=67;
  angularImg:string="https://angular.io/assets/images/logos/angular/angular.png";

  // attribute Binding
  cols:number=3;
  bdr:number=1;

  // two binding
  data:string="";
  friend:string="";
  
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
  
    users:string[]=["John Doe","Jane Smith","Michael Johnson","Emily Davis","Joe Brown","Grace Thompson","Mike Wilson","Karen Wilson"];

    employees:Employee[]=[
      {
        code:"emp001",
        name:"Jayesh",
        salary:20000,
        DOB:"02/aug/2000"
      },
      {
        code:"emp002",
        name:"Rohan",
        salary:12000,
        DOB:"03/sep/2002"
      },
      {
        code:"emp003",
        name:"Rahul",
        salary:15000,
        DOB:"16/nov/1999"
      },
      {
        code:"emp004",
        name:"Rohit",
        salary:18000,
        DOB:"20/dec/2001"
      },
      {
        code:"emp005",
        name:"Ravi",
        salary:10000,
        DOB:"12/feb/2000"
      },
      {
        code:"emp006",
        name:"Raj",
        salary:16000,
        DOB:"05/may/2001"
      }
    ]

    dob:Date=new Date(1999,10,19,11,29);
    dob1:any=Date.now();

    salary:number=12890;

    eName:string="Rahul";
    ePosition:string="Manager";
    eWork:string="software developer";

    currentDate:Date=new Date();
    myNumber:number=0.124678543245;

    employeesDetails:Emp[]=[
      {"id":1,"name":"Rahul"},
      {"id":2,"name":"Rohan"},
      {"id":3,"name":"Raj"},
      {"id":4,"name":"Ravi"},
      {"id":5,"name":"Rohit"},
      {"id":6,"name":"Ramesh"},
      {"id":7,"name":"Rajesh"},
    ]

    employeeData:EmpPerson[]=[
      {
        code:"001",
        name:"Rahul",
        salary:12000,
        gender:"male"
      },{
        code:"002",
        name:"Rohini",
        salary:15000,
        gender:"female"
      },{
        code:"003",
        name:"Raj",
        salary:18000,
        gender:"male"
      },{
        code:"004",
        name:"Arya",
        salary:14000,
        gender:"female"
      },{
        code:"005",
        name:"Aman",
        salary:16000,
        gender:"male"
      },{
        code:"006",
        name:"Arjun",
        salary:10000,
        gender:"male"
      }
    ]

  constructor(private router:Router){
    this.students=[{id:1,name: "Student1",gender:"M",age:24,course:"BCA"},{id:2,name: "Student2",gender:"F",age:22,course:"MBA"},{id:3,name: "Student3",gender:"M",age:26,course:"BSc"},{id:4,name: "Student4",gender:"F",age:20,course:"MCA"}];
    localStorage.setItem("loggedIn","false");

  }

  ngOnInit(){
    // this.msg=this._messageService.getMessage();
    // localStorage.setItem("loggedIn","false");
  }

  getMessages(){
    // this.msg=this._messageService.getMessage();
    // this.othermsg=this._messageService.getOtherMessage();
  }
  
  student(){
    this.router.navigate(['/student'])
  }
  studentDetails(){
    this.router.navigate(['/studentdetails'])
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

  getCssClass(mode:string):object{
    if(mode==='normal'){
      return {one:true,four:true}
    }
    return {five:true,two:true}
  }

  onClick(){
    console.log("Clicked on Button (Click Me..:))");
  }

  showAlert(){
    alert("You have Hover on Hover Button...;)");
  }

  display(val:any){
    this.data=val.value;
  }
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

interface Employee{
  code:string,
  name:string,
  salary:number,
  DOB:string,
}

interface Emp{
  id:number,
  name:string
}

interface EmpPerson{
  code:string,
  name:string,
  salary:number,
  gender:string,
}

