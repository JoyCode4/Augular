import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessageService {

  constructor() { }
  getMessage():string{
    return "Hello Angular Application....!";
  }
}
