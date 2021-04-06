import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import {ApiService} from '../api.service';

import { Posts } from '../posts';
import {Posts1} from '../posts1';
import {Sample} from '../sample';


@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {

  public posts: Posts[];

  public posts1: Posts1[];



  data!:FormGroup;

  url="https://jsonplaceholder.typicode.com/posts";


  constructor(private http: HttpClient, private api:ApiService) {
    this.data = new FormGroup({
      postId: new FormControl(''),
      id: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      body: new FormControl('')
    })

   }













  delete = (index: any): any => {
    this.posts.splice(index, 1);
  }

  ngOnInit(): void {
    this.api.getposts().subscribe(
      data=>
      {
        this.posts=data;
      }
     );

    this.api.getpostsbyparameter().subscribe(
      data=>
      {
        this.posts1=data;
      }
    );
  }


}
