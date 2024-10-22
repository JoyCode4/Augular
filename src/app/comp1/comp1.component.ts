import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{
  list:number[]=[];
  constructor(private _numlist:NumlistService){}

  ngOnInit():void{
    this.list=this._numlist.getList();
  }
  
  addNumber(number:string):void{
    this._numlist.addNumber(parseInt(number));
    this.list=this._numlist.getList();
  }
}
