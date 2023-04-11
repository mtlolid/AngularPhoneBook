import { Pipe, PipeTransform } from '@angular/core';
import { IMyBook } from './my-phone-book.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(phoneBook: IMyBook[], sortName: string, sort: boolean): IMyBook[] {
    if (!phoneBook) return [];

    if(sortName == 'firstName'){
      if (sort) {
        return phoneBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
      }
      return phoneBook.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0))
    }
    
    if(sortName == 'lastName'){
      if (sort) {
        return phoneBook.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
      }
      return phoneBook.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1 : 0))
    }

    if(sortName == 'phoneNumber'){
      if (sort) {
        return phoneBook.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : ((a.phoneNumber < b.phoneNumber) ? -1 : 0))
      }
      return phoneBook.sort((a, b) => (a.phoneNumber < b.phoneNumber) ? 1 : ((a.phoneNumber > b.phoneNumber) ? -1 : 0))
    }

    if (sort) {
      return phoneBook.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
    }
    return phoneBook.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0))

   
  }
}
