import { Component } from '@angular/core';

@Component({
  selector: 'app-my-phone-book',
  templateUrl: './my-phone-book.component.html',
  styleUrls: ['./my-phone-book.component.scss']
})
export class MyPhoneBookComponent {

  public searchField = '';

  public addCheck = false;
  public editCheck = false;
  public editIndex!: number;

  public firstNameInput = '';
  public lastNameInput = '';
  public phoneNumbInput = '';

  public sortName = 'firstName';
  public sortDir = false;

  public phoneBook: IMyBook[] = [
    {
      firstName: 'Petya',
      lastName: 'Zhuk',
      phoneNumber: '0631111111'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      phoneNumber: '0631222222'
    },
    {
      firstName: 'Alejandro',
      lastName: 'Del Rio Albrechet',
      phoneNumber: '0633333333'
    },
    {
      firstName: 'Vasylyna',
      lastName: 'Vrublevska',
      phoneNumber: '0635555555'
    },
    {
      firstName: 'Ira',
      lastName: 'Tytar',
      phoneNumber: '0636666666'
    },
    {
      firstName: 'Sofia',
      lastName: 'Zhuk',
      phoneNumber: '0977777777'
    },
  ];

  public deleteElem(i: number): void {
    this.phoneBook.splice(i, 1);
  };

  public startAddFunc(): void {
    this.addCheck = true;
  };

  public endAddFunc(): void {
    this.addCheck = false;
    this.editCheck = false;
  };

  public editFunc(index: number): void {
    this.addCheck = true;
    this.editCheck = true;
    this.editIndex = index;
    this.firstNameInput = this.phoneBook[this.editIndex].firstName;
    this.lastNameInput = this.phoneBook[this.editIndex].lastName;
    this.phoneNumbInput = this.phoneBook[this.editIndex].phoneNumber;
  }

  public addOrEditPage() {
    let obj: IMyBook = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      phoneNumber: this.phoneNumbInput
    };

    if (this.addCheck && !this.editCheck) {
      this.phoneBook.push(obj);
      this.addCheck = false;
    }
    if (this.editCheck) {
      this.phoneBook[this.editIndex] = obj;
      this.addCheck = false;
      this.editCheck = false;
    }

    this.firstNameInput = '';
    this.lastNameInput = '';
    this.phoneNumbInput = '';

  };

  public changeSort(sortName: string){
    this.sortName = sortName;
    this.sortDir = !this.sortDir;
  }

}

export interface IMyBook {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}
