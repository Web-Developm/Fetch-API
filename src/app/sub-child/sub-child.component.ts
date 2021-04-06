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
  objPosts:Posts;

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
        console.log(this.posts);
      }
     );

    this.api.getpostsbyparameter().subscribe(
      data=>
      {
        this.posts1=data;
        console.log(this.posts1);
      }
    );

    let value1=new Posts();
    value1.body='testbody';
    value1.title='testtitle';
    value1.userId=5;

    this.api.post(value1).subscribe(
      data =>
      {
        this.objPosts=data;
      }
    );

  }


}
