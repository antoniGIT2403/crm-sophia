
import { Routes, RouterModule } from '@angular/router';
import { PageClientsComponent } from './page/page-clients/page-clients.component';
import { NgModule } from '@angular/core';
import { PageAddClientComponent } from './page/page-add-client/page-add-client.component';



const routes: Routes = [
  { path: '', component: PageClientsComponent,
    data: { title : 'Clients', subtitle: 'Tous les clients'}
},
{ path: 'add', component: PageAddClientComponent,
data: { title : 'Clients', subtitle: 'Ajouter un client'}
},



];


@NgModule({
  imports: [

    RouterModule.forChild(
      routes)

  ]

})
export class ClientsRoutingModule { }
