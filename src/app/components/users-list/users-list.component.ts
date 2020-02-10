import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../../services/dataService';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(public dataList: UsersDataService) { }

  // better define model for user but time limited
  // define statues for empty case and error case but for time limit will do later with other enhancements

  users: any = [];
  location: any;
  dataStatues:string;
  ngOnInit() {
    this.location = { location: 'Hamburg' };
    
  }

  loadData() {
    this.dataList.sendLocation(this.location).subscribe(

      data => {
        this.users = data;
      },
      error => { console.log(error) }
    )
  }
  clearData() {
    this.users = null;
  }

}
