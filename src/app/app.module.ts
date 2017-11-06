import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

// external imports
// angular2-wizard-angular-material
import { FormWizardModule } from 'angular2-wizard';

// custom components
import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module';
import { CreatePipelineComponent } from './create-pipeline/create-pipeline.component';
import { ViewPipelinesComponent } from './view-pipelines/view-pipelines.component';
import { AddPipelineSourceComponent } from './add-pipeline-source/add-pipeline-source.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePipelineComponent,
    ViewPipelinesComponent,
    AddPipelineSourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FormWizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
