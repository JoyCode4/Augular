import { Component, } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  // providers:[NumlistService]
})
export class Comp2Component {
  list:number[]=[];
  constructor(private _numlist:NumlistService){}

  ngOnInit():void{
    this.list=this._numlist.getList();
  }

  addNumber(num:string){
    this._numlist.addNumber(parseInt(num));
    this.list=this._numlist.getList();
  }
}
