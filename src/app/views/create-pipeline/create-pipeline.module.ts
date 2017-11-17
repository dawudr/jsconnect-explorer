import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormWizardModule } from 'angular2-wizard';

import { CreatePipelineComponent } from './create-pipeline.component';
import { CreatePipelineRoutingModule } from './create-pipeline-routing.module';
import { SourceFilterPipe } from './source-filter.pipe';

@NgModule({
  imports: [
    CreatePipelineRoutingModule,
    CommonModule,
    FormsModule,
    FormWizardModule
  ],
  declarations: [ CreatePipelineComponent, SourceFilterPipe ]
})
export class CreatePipelineModule { }
