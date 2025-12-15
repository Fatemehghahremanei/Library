import { Injectable } from '@angular/core';
import { IMemberItem } from './member-page';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private member: IMemberItem[] = [
    { id: 110, firstname: 'مازیار', lastname: 'احمدی', nationality: 4045573487 },
    { id: 111, firstname: 'امید', lastname: 'باکری', nationality: 4041573447 },
    { id: 112, firstname: 'امید', lastname: 'محمدی', nationality: 4045573447 },
    { id: 113, firstname: 'مهرناز', lastname: 'مصلایی', nationality: 4045573478 },
    { id: 114, firstname: 'مونا', lastname: 'حسینی', nationality: 4045573478 }
  ];
  list(){
    return [...this.member];
  }

  add(item: IMemberItem) {
    this.member.push(item);
  }
}