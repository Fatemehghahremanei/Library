import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {

  data: BookItem[] = [
    { id: 1, title: 'بادام', writer: 'وون پیونگ سون', publisher: 'دانش', price: 90000 },
    { id: 2, title: 'پنج قدم فاصله', writer: 'ریچل لیپینکات', publisher: 'مجله', price: 69900 },
    { id: 3, title: 'کتابخانه نیمه شب', writer: 'مت هیگ', publisher: 'ایین محمود', price: 42800 },
    { id: 4, title: 'هم نام', writer: 'آدریان یانگ', publisher: 'آراستگان', price: 98900 },
    { id: 5, title: 'سم هستم بفرمایید', writer: 'داستین تائو', publisher: 'آثار قلم', price: 59900 },
  ];
   add() {
     this.data.push({id:6,title:'سمفونی مردگان',writer:'عباس معروفی',publisher:'آثار قلم',price:88000}); 
  }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
