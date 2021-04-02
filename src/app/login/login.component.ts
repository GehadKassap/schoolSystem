import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare  var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( ) {

  }
  signInData = new FormGroup({
    email: new FormControl('' , [Validators.required , Validators.email]),
    password: new FormControl('' , [Validators.required , Validators.minLength(4), Validators.maxLength(12) ])
  })
  /************* */
  submitData()
  {
    console.log(this.signInData.value)
  }
  /***** */
  firePlugin()
  {
   $('#signIn').particleground();
  }
  ngOnInit(): void {
    this.firePlugin()
  }

}
