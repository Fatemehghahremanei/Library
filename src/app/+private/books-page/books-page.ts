import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-books-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage  extends BaseCrudPage<BookItem> implements OnInit {

  ngOnInit(): void {
    this.dataRefresh();
        this.item={
      title:'',
      publisher:'',
      writer:''
    }
  }
  override setService = inject(BooksService);
  override addPrepir(): void {
    this.item={
      title:'',
      publisher:'',
      writer:''
    }
  }
  booksColumns:column[]=[
    {field:'id',titel:'شناسه'},
    {field:'title',titel:'عنوان'},
    {field:'writer',titel:'نویسنده'},
    {field:'publisher',titel:'ناشر'},
    {field:'price',titel:'قیمت'}
  ]
}
export interface BookItem  extends Thing{
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
