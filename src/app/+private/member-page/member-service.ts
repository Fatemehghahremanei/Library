import { Injectable } from '@angular/core';
import { memberItem } from './member-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root'
})
export class MembersService extends BaseService<memberItem> {
  override data: memberItem[] = [
    { id: 110, firstname: 'علی ', lastname: 'محمدی', nationality:'4045573487'  },
    { id: 111, firstname: 'رضا', lastname: 'رضای', nationality: '4041573447' },
    { id: 112, firstname: 'امید', lastname: 'احمدی', nationality: '4045573447' },
    { id: 113, firstname: 'کاوه', lastname: 'مهدوی', nationality: '4045573478' },
    { id: 114, firstname: 'کوروش', lastname: 'حسینی', nationality: '4045573478' }
  ];
  override update(destination: memberItem, source: memberItem): void {
    destination.firstname=source.firstname;
    destination.lastname=source.lastname;
    destination.nationality=source.nationality;
  }
}