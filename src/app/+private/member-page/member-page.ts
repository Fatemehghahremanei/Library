import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './member-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './member-page.html',
  styleUrls: ['./member-page.scss']
})
export class MembersPage implements OnInit {

  seve() {
    this.memberservice.add(this.item);
    this.dataRefresh();
    this.state = 'list';
  }

  ngOnInit(): void {
    this.dataRefresh();
  }
  data: memberItem[] = [];
  item: memberItem = {
    id: 0,
    firstname:'',
    lastname:'',
    nationality:''
  };
  memberservice = inject(MembersService)
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberservice.list();
  }
  add() {
    this.state = 'add';
  }
  cancel() {
    this.state = 'list';
  }
}
export interface memberItem {
  id: number;
  firstname: string;
  lastname: string;
  nationality: string;
}
