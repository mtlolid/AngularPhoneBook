import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPhoneBookComponent } from './my-phone-book/my-phone-book.component';
import { SearchPipe } from './my-phone-book/search.pipe';
import { SortPipe } from './my-phone-book/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyPhoneBookComponent,
    SearchPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
