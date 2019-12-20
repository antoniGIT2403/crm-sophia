import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from '../shared/components/comment/comment.component';
import { DetailComponent } from '../shared/components/detail/detail.component';
import { PageAddPrestationComponent } from './page/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './page/page-prestations/page-prestations.component';




const routes: Routes = [
  { path: '', component: PagePrestationsComponent,
  data: { title : 'Prestation', subtitle: 'Toutes les Prestation'},
  children: [
    { path: '', redirectTo: 'comment', pathMatch: 'full'},
    { path: 'comment', component: CommentComponent},
    { path: 'detail', component: DetailComponent},
  ]
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

  ],
  exports:[
    RouterModule
  ]
})

export class PrestationsRoutingModule { }
