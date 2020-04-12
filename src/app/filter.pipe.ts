import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any, ...args: unknown[]): unknown {
     value.sort((a,b) => {
      return b.confirmed - a.confirmed 
    });

    return value
  }

}
