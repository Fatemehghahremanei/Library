import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
   override data: BookItem[] = [
      { id: 1, title: 'بادام', writer: 'وون پیونگ سون', publisher: 'دانش', price: 90000 },
      { id: 2, title: 'پنج قدم فاصله', writer: 'ریچل لیپینکات', publisher: 'مجله', price: 69900 },
      { id: 3, title: 'کتابخانه نیمه شب', writer: 'مت هیگ', publisher: 'ایین محمود', price: 42800 },
      { id: 4, title: 'هم نام', writer: 'آدریان یانگ', publisher: 'آراستگان', price: 98900 },
      { id: 5, title: 'سم هستم بفرمایید', writer: 'داستین تائو', publisher: 'آثار قلم', price: 59900 },
    ];
    override update(destination: BookItem, source: BookItem): void {
        destination.title=source.title; 
        destination.writer=source.writer;
        destination.publisher=source.publisher; 
        destination.price=source.price;  
    }
}
