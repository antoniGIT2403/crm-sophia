import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    if (value) {
      if (arg){
        // return value.totalTtc();
        return value.totalTtc();
      }
      return value.totalHt();
    }

    return null;
  }

}
