import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CreatePipelineComponent } from './create-pipeline/create-pipeline.component';
import { ViewPipelinesComponent } from './view-pipelines/view-pipelines.component';
import { AddPipelineSourceComponent } from './add-pipeline-source/add-pipeline-source.component';


const routes: Routes = [
  { path: ' ', redirectTo: '/new-pipeline', pathMatch: 'full' },
  { path: 'new-pipeline', component: CreatePipelineComponent },
  { path: 'view-pipelines', component: ViewPipelinesComponent },
  { path: 'add-pipelines-source', component: AddPipelineSourceComponent },
  { path: '**', redirectTo: '/' }  // 404 redirect to /'stock'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
