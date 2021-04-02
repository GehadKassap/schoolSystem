import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
   item:any;
  constructor() { }


  setDetails(itemDetails:any)
  {
     this.item = itemDetails;
  }
  getDetails()
  {
    return this.item;
  }
}
