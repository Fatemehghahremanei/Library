import { Component, OnInit } from '@angular/core';
import { MembersService } from './member-service';

@Component({
  selector: 'app-members-page',
  templateUrl: './member-page.html',
  styleUrls: ['./member-page.scss']
})
export class MembersPage implements OnInit {
member: any;
  ngOnInit(): void {
    this.membersRefresh();
  }

  memberList: IMemberItem[] = [];

  constructor(private membersService: MembersService) {
    this.membersRefresh();
  }

  membersRefresh() {
    this.memberList = this.membersService.list();
  }

  add() {
    this.membersService.add({ id: 136, firstname: 'علی ', lastname: 'موسوی', nationality: 4045573789 });
    this.membersRefresh();
  }
}
  export interface IMemberItem {
    id: number;
    firstname: string;
    lastname: string;
    nationality: number;
  }
