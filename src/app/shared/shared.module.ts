import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent],
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent, TemplateModule]
})
export class SharedModule { }
