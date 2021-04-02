import { Component, OnInit } from '@angular/core';

import { PublicService} from './../public.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

studentDetails:any = {};
  constructor( private _PublicService:PublicService) {


  }

  ngOnInit(): void {
    var url = window.location.pathname;
    var id :any= url.substring(url.lastIndexOf('/') + 1);
    //console.log(id);


        this._PublicService.getDetails(id).subscribe((res:any)=>{
          this.studentDetails = res.data;

     });
  }

}
