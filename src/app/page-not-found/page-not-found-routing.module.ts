import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundModule } from './page-not-found.module';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNotFoundComponent },




];


@NgModule({
  imports: [

    RouterModule.forChild(
      routes)

  ]

})
export class PageNotFoundRoutingModule { }



