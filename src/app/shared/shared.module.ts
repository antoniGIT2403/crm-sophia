import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, StateDirective, TableauDarkComponent, TableauLightComponent]
})
export class SharedModule { }
