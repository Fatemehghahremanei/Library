import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-crud',
  imports: [],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
}
