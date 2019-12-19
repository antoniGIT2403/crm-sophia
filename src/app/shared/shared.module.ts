import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TemplateModule } from '../template/template.module';
import { BoutonComponent } from './components/bouton/bouton.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent, BoutonComponent],
  imports: [
    CommonModule,
    TemplateModule,
    RouterModule
  ],
  exports: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent, TemplateModule,BoutonComponent]
})
export class SharedModule { }
