import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePrestationsComponent } from './page/page-prestations/page-prestations.component';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: PagePrestationsComponent },




];


@NgModule({

  imports: [

    RouterModule.forChild(
      routes)

  ]
})

export class PrestationsRoutingModule { }
