import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePipelinesComponent } from './manage-pipelines.component';

const routes: Routes = [
  {
    path: '',
    component: ManagePipelinesComponent,
    data: {
      title: 'ManagePipelines'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePipelinesRoutingModule { }
