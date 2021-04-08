import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

import { ApiService } from '../api.service';

import { Posts } from '../posts';
import { Posts1 } from '../posts1';
import { Sample } from '../sample';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {

  public posts: Posts[];//data
  public posts1: Posts1[];
  objPosts: Posts;
  objPuts: Posts;
  objPatch: Posts;
  message: String;

  tablePosts: Posts;



  constructor(private api: ApiService) {
  }

  data = new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  })

  update1 = (info: any, index: number): any => {
    this.data.setValue({
      userId: info.userId,
      id: info.id,
      title: info.title,
      body: info.body
    })
  }

  update2 = (): any => {
    let temp = this.posts.findIndex(obj => obj.id === this.data.controls['id'].value);
    this.posts[temp].userId = this.data.controls['userId'].value;
    this.posts[temp].title = this.data.controls['title'].value;
    this.posts[temp].body = this.data.controls['body'].value;
    alert("Successfully Updated");
  }


  display() {
    console.log(this.data.value);
  }


  delete1 = (id: any): any => {
    this.posts.splice(id, 1);
  }

  ngOnInit(): void {

    this.api.getposts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );

    this.api.getpostsbyparameter().subscribe(
      data => {
        this.posts1 = data;
        console.log(this.posts1);
      }
    );

    //post
    let value1 = new Posts();
    value1.body = 'testbody';
    value1.title = 'testtitle';
    value1.userId = 5;

    this.api.post(value1).subscribe(
      data => {
        this.objPosts = data;
      }
    );

    //put
    value1 = new Posts();
    value1.body = "Updating the body";
    value1.title = "Updating the title";
    value1.userId = 5;

    this.api.put(value1).subscribe(
      data => {
        this.objPuts = data;
      }
    );

    //patch
    value1 = new Posts();
    value1.title = "patched the title";

    this.api.patch(value1).subscribe(
      data => {
        this.objPatch = data;
      }
    );

    this.api.delete().subscribe(
      data => {
        this.message = "Resource deleted successfully";
      }
    )

    this.add();




  }

  add = (): any => {
    let temp1 = new Posts();
    temp1.userId = this.data.controls['userId'].value;
    temp1.title = this.data.controls['title'].value;
    temp1.body = this.data.controls['body'].value;

    this.api.add(temp1).subscribe(
      data => {
        this.tablePosts = data;
      }
    )
  }

  delete = (id: any): void => {

    this.api.delete1(id).subscribe(
      data => {
        console.log(data);
        alert("Successfully deleted");
      }
    )

  }




}
