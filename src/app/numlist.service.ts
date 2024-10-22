import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
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
