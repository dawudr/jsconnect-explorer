import { Injectable } from '@angular/core';
import { Pipeline } from './pipeline';
import { Observable } from 'rxjs/Observable';
import { findIndex } from 'lodash';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class PipelineService {
  private pItems : Pipeline[];

  constructor(private http: Http) {
  }

  /**
   * Load pipelines from the static pipelines.json data, usually an API URL.
   *
   * @return {Observable<Pipeline[]>} A list of books.
   */
  getPipelines(): Observable<Pipeline[]> {
    return this.http.get('./test/pipelines.json')
      .map(res => res.json().data)
//            .catch(this.handleError);

  }

  addPipeline(pipeline: Pipeline) {
    this.pItems.push(pipeline);
    console.log(this.pItems);
  }

  updatePipeline(pipeline: Pipeline) {
    let index = findIndex(this.pItems, (p: Pipeline) => {
      return p.id === pipeline.id;
    });
    this.pItems[index] = pipeline;
  }

  deletePipeline(pipeline: Pipeline) {
    this.pItems.splice(this.pItems.indexOf(pipeline), 1);
    console.log(this.pItems);
  }

  public handleError = (error: Response) => {

      // Do messaging and error handling here
      return Observable.throw(error)
  }

}
