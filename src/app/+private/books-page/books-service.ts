import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BookItem[] = [
      { id: 1, title: 'بادام', writer: 'وون پیونگ سون', publisher: 'دانش', price: 90000 },
      { id: 2, title: 'پنج قدم فاصله', writer: 'ریچل لیپینکات', publisher: 'مجله', price: 69900 },
      { id: 3, title: 'کتابخانه نیمه شب', writer: 'مت هیگ', publisher: 'ایین محمود', price: 42800 },
      { id: 4, title: 'هم نام', writer: 'آدریان یانگ', publisher: 'آراستگان', price: 98900 },
      { id: 5, title: 'سم هستم بفرمایید', writer: 'داستین تائو', publisher: 'آثار قلم', price: 59900 },
    ];
    list(){
      return [...this.data];
    }
    add(item:BookItem){
      this.data.push(item)
    }
    edit(item:BookItem){
    const index= this.data.findIndex(b=>b.id==item.id);
    if(index!=-1){
     this.data[index].title=item.title; 
     this.data[index].writer=item.writer;
     this.data[index].publisher=item.publisher; 
     this.data[index].price=item.price;  
    }
    }
        remove(item:BookItem){
     this.data=this.data.filter(b=>b.id!=item.id);
    }
    
}
