import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MessageService {

  constructor(private _othermessageService:OthermessageService) { }
  getMessage():string{
    return "Hello Angular Application....!";
  }

  //*** IMP *** when we use other service in service then we need to inject that service in constructor of this service. so we required the injectable decorator.
  getOtherMessage():string{
    return this._othermessageService.getOtherMessage();
  }
}
