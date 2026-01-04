import { Component, inject,InjectionToken, OnInit } from '@angular/core';
import { MembersService } from './member-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './Member-page.html',
  styleUrls: ['./Member-page.scss']
})
export class membersPage extends BaseCrudPage<memberItem> implements OnInit {
  ngOnInit(): void {
    this.dataRefresh();
  }
  override setService=inject(MembersService);
  override addPrepir(): void {
    this.item={
      firstname:'',
      lastname:'',
      nationality:''
    }
  }
  }
export interface memberItem extends Thing{
  firstname: string;
  lastname: string;
  nationality?: string;
}
