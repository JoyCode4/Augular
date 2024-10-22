import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class OthermessageService {

  constructor() { }
  getOtherMessage():string{
    return  "It is another message....!";
  }
}
