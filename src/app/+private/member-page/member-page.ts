import { Component, inject,InjectionToken, OnInit } from '@angular/core';
import { MembersService } from './member-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './Member-page.html',
  styleUrls: ['./Member-page.scss']
})
export class membersPage implements OnInit {
  seve() {
    if (this.state == 'add') {
      this.membersService.add(this.item);

    }
    else if (this.state == 'edit') {
      this.membersService.edit(this.item);
    }
    else if (this.state == 'remove') {
      this.membersService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
   state: string = 'list';
  data: memberItem[] = [];
  item: memberItem = {
    firstname: '',
    lastname: '',
  };
  membersService = inject(MembersService)
  dataRefresh() {
    this.data = this.membersService.list();
  }
  add() {
    this.state = 'add';
     this.item = { firstname: '', lastname: '' };
  }
    edit(members: memberItem) {
      this.item = { ...members};
      this.state = 'edit'
    }
    remove(members:memberItem){
     this.item = { ...members};
     this.state='remove';
    }
  cancel() {
    this.state = 'list';
  }
}
export interface memberItem extends Thing{
  firstname: string;
  lastname: string;
  nationality?: string;
}
