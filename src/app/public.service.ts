import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private _HttpClient:HttpClient) { }

  getData():Observable<any>
  {
    return this._HttpClient.get('https://reqres.in/api/users?page=1&per_page=6');
  }
  getDetails(num:number)
  {
    return this._HttpClient.get('https://reqres.in/api/users/'+num);

  }
}
