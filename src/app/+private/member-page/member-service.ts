import { Injectable } from '@angular/core';
import { memberItem } from './member-page';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private Members: memberItem[] = [
    { id: 110, firstname: 'علی ', lastname: 'محمدی', nationality:'4045573487'  },
    { id: 111, firstname: 'رضا', lastname: 'رضای', nationality: '4041573447' },
    { id: 112, firstname: 'امید', lastname: 'احمدی', nationality: '4045573447' },
    { id: 113, firstname: 'کاوه', lastname: 'مهدوی', nationality: '4045573478' },
    { id: 114, firstname: 'کوروش', lastname: 'حسینی', nationality: '4045573478' }
  ];
  list(){
    return [...this.Members];
  }

  add(item: memberItem) {
    this.Members.push(item);
  }
}