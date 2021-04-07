import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private api:ApiService) { }

  public user:User[];


  ngOnInit(): void {

    this.api.user().subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
      }
    )
  }

}
