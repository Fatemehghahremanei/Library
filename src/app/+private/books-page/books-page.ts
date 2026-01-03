import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage  extends BaseCrudPage<BookItem> implements OnInit {

  ngOnInit(): void {
    this.dataRefresh();
  }
  override setService = inject(BooksService);
  override addPrepir(): void {
    this.item={
      title:'',
      publisher:'',
      writer:''
    }
  }
}
export interface BookItem  extends Thing{
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
