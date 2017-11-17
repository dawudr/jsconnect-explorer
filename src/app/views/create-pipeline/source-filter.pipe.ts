import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sourceFilter',
  pure: false
})
export class SourceFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
//   console.log("ITEMS->" + JSON.stringify(items) + " and field->" + field + " and value->" + value);
   console.log("field->" + field + " and value->" + value);

   if (!items) return [];
   return items.filter(it => it[field] == value);
  }
}
