import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhoneBookComponent } from './my-phone-book.component';

describe('MyPhoneBookComponent', () => {
  let component: MyPhoneBookComponent;
  let fixture: ComponentFixture<MyPhoneBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPhoneBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPhoneBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
