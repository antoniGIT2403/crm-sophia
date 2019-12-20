import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TemplateModule } from '../template/template.module';
import { BoutonComponent } from './components/bouton/bouton.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './components/comment/comment.component';
import { DetailComponent } from './components/detail/detail.component';
import { SousNavComponent } from './components/sous-nav/sous-nav.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent, BoutonComponent, CommentComponent, DetailComponent, SousNavComponent],
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ],
  exports: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent, TemplateModule,BoutonComponent,CommentComponent, DetailComponent, SousNavComponent]
})
export class SharedModule { }
