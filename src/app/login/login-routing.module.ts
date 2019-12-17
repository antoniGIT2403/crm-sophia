import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';


const routes: Routes = [
  { path: 'login', component: PageLoginComponent },

];



@NgModule({
  imports: [

    RouterModule.forChild(
      routes)

  ]

})
export class LoginRoutingModule { }
