import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
 @Output() onCancel=new EventEmitter;
 @Output() onAdd=new EventEmitter;
 @Input() columns:column[]=[];
 @Input() mydata:any[]=[];
 @Output() onEdit=new EventEmitter<any>;
 @Output() onRemove=new EventEmitter<any>;
 @Output() onsave=new EventEmitter;
}
export interface column{
  titel:string;
  field:string;
}