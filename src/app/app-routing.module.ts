import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"login" , component:LoginComponent} ,
  {path:"details/:id" , component:DetailsComponent} ,
  {path:"**" ,component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
