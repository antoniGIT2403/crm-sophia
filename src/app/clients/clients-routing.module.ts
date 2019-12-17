
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './page/page-clients/page-clients.component';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', component: PageClientsComponent },




];


@NgModule({
  imports: [

    RouterModule.forChild(
      routes)

  ]

})
export class ClientsRoutingModule { }
