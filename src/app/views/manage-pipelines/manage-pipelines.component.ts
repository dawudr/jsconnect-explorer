import { Component, Injectable, OnInit } from '@angular/core';
import { Pipeline } from '../../services/pipeline';
import { PipelineService } from '../../services/pipeline.service';
import { NgSwitch } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/min';

@Component({
  selector: 'app-manage-pipelines',
  templateUrl: './manage-pipelines.component.html',
  styleUrls: ['./manage-pipelines.component.scss']
})
@Injectable()
export class ManagePipelinesComponent implements OnInit {

  selectedPipeline: Pipeline;

  /**
   * @type {number} numberOfPipelines The number of pipelines in the JSON file, used for max attribute for limit and page.
   */
  numberOfPipelines: number;

  /**
   * @type {number} limit The number of pipelines per page.
   */
  limit: number;

  /**
   * @type {number} page The current page.
   */
  page: number = 1;

  /**
   * @type {Pipeline[]} pipelines A list of books to output in a table.
   */
  pipelines: Pipeline[];

  /**
   * @type {Pipeline} filter The object containing the filter values to apply to pipelinefilter.
   * Could have created another entity called PipelineFilter, but it would basically have the same fields.
   */
  filter: Pipeline; //= new Pipeline();


  constructor(private pipelineService: PipelineService) { }

  ngOnInit() {

    // Load pipelines from the pipelines service on init
    this.pipelineService.getPipelines().subscribe(
      (pipelines: Pipeline[]) => {
        this.pipelines = pipelines;
        this.numberOfPipelines = this.pipelines.length;
        this.limit = this.pipelines.length; // Start off by showing all pipelines on a single page.
      });
  }

  onSelect(pipeline: Pipeline): void {
    this.selectedPipeline = pipeline;
  }

}
