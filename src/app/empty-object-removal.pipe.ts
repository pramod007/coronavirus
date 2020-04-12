import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyObjectRemoval'
})
export class EmptyObjectRemovalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    let a=0;
    Object.keys(value).forEach((key) => {
      if(!(value[key].value.confirmed || value[key].value.deaths || value[key].value.recovered)){
delete value[key]
      }else{
        console.log(a++)
        let date:any = value[key].key.split('/')
        // value[key].key=date[1]+'/'+date[0]+'/'+date[2]
      }
    })
    console.log(value.length)
    return value;
  }

}
