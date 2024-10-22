import { Injectable } from '@angular/core';

@Injectable({
  // when we provide service in root then we can use that service in any component.as we have not assign or import the component in app.module.ts
  providedIn: 'root'
})
// @Injectable()
export class NumlistService {
  list:number[]=[100];
  constructor() { }

  addNumber(num:number){
    this.list.push(num);
  }

  getList(){
    return this.list;
  }
}
