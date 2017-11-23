import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagePipelinesRoutingModule } from './manage-pipelines-routing.module';
import { ManagePipelinesComponent } from './manage-pipelines.component';
import { PipelineService } from '../../services/pipeline.service';
import { PipelineFilterPipe } from './pipeline-filter.pipe';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    ManagePipelinesRoutingModule,
    HttpModule
  ],
  providers: [ PipelineService ],
  declarations: [ManagePipelinesComponent, PipelineFilterPipe]
})
export class ManagePipelinesModule { }
