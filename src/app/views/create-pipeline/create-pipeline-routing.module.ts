import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePipelineComponent } from './create-pipeline.component';

const routes: Routes = [
  {
    path: '',
    component: CreatePipelineComponent,
    data: {
      title: 'CreatePipeline'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePipelineRoutingModule {}
