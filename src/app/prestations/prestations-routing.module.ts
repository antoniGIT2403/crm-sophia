import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './page/page-prestations/page-prestations.component';

import { Routes, RouterModule } from '@angular/router';
import { PageAddPrestationComponent } from './page/page-add-prestation/page-add-prestation.component';



const routes: Routes = [
  { path: '', component: PagePrestationsComponent,
  data: { title : 'Prestation', subtitle: 'Toutes les Prestation'}
},

  { path: 'add',
   component: PageAddPrestationComponent,
  data: { title : 'Prestation', subtitle: 'Ajouter une prestation'}
},




];


@NgModule({

  imports: [

    RouterModule.forChild(
      routes)

  ]
})

export class PrestationsRoutingModule { }
