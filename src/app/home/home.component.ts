import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';
import { SharedService } from '../shared.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataHolder:any =[];

  constructor(  private _Router:Router, private _PublicService:PublicService , private _SharedService:SharedService) {
    this._PublicService.getData().subscribe(res =>{
      this.dataHolder = res.data;
     // console.log(res.data);
    })
  }
  getItemId(id:any)
  {
    this._Router.navigateByUrl('/details/'+id);
  }
  ngOnInit(): void {
  }

}
