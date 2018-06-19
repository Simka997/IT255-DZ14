import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'searchpipe'
})

export class SearchpipePipe implements PipeTransform {
  transform(value: Object[], var1: string,var2: string): Object[] {
    if (value == null) {
      return null;
    }
    if (var1 !== undefined) {
      value =  value.filter((item: Object) => item['sifra'].toLowerCase().indexOf(var1.toLowerCase()) !== -1);
    }
    if (var2 !== undefined) {
         value = value.filter((item: Object) => item['cena'].toLowerCase().indexOf(var2.toLowerCase()) !== -1);
    }
      return value;
    
  }
}
