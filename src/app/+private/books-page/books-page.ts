import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  seve() {
    if (this.state == 'add') {
      this.booksService.add(this.item);

    }
    else if (this.state == 'edit') {
      this.booksService.edit(this.item);
    }
        else if (this.state == 'remove') {
      this.booksService. remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  state: string = 'list';
  data: BookItem[] = [];
  item: BookItem = {
    title: '',
    writer: '',
    publisher: ''
  };
  booksService = inject(BooksService);
  dataRefresh() {
    this.data = this.booksService.list();
  }
  add() {
    this.state = 'add';
    this.item = { title: '', writer: '', publisher: '' };
  }
  edit(book: BookItem) {
    this.item = { ...book };
    this.state = 'edit'
  }
  remove(book:BookItem){
   this.item = { ...book };
   this.state='remove';
  }
  cancel() {
    this.state = 'list';
  }

}
export interface BookItem {
  id?: number;
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
