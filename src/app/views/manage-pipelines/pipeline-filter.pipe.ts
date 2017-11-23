import { Pipe, PipeTransform } from '@angular/core';
import { Pipeline } from '../../services/pipeline';

@Pipe({
  name: 'pipelineFilter',
  pure: false

})
export class PipelineFilterPipe implements PipeTransform {

  transform(items: Pipeline[], filter: Pipeline): Pipeline[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Pipeline) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {Pipeline} pipeline The pipeline to compare to the filter.
   * @param {Pipeline} filter The filter to apply.
   * @return {boolean} True if pipeline satisfies filters, false if not.
   */
  applyFilter(pipeline: Pipeline, filter: Pipeline): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (pipeline[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (pipeline[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }

}
