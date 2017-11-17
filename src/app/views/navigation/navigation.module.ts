import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';

@NgModule({
  imports: [
    NavigationRoutingModule,
    CommonModule
  ],
  declarations: [NavigationComponent]
})
export class NavigationModule { }
