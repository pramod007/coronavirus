import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyObjectRemoval'
})
export class EmptyObjectRemovalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    console.log(value)
  for(let i=0;i<value.length;i++){
   let temp= value[i].key.split('/')
   value[i].key=temp[1]+'/'+temp[0]+'/'+temp[2]
  }
    return value
   
  }

}
