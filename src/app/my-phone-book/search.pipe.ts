import { Pipe, PipeTransform } from '@angular/core';
import { IMyBook } from './my-phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IMyBook[], field: string): IMyBook[] {
    if(!value) return [];
    if(!field) return value;
    return value.filter(page => page.firstName.toLowerCase().includes(field.toLowerCase()))
  }

}
