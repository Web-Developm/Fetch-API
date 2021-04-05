import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Posts } from '../posts';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.css']
})
export class SubChildComponent implements OnInit {

  posts: Posts[];

  text:String;

  constructor(private http: HttpClient) { }



  Posts() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(
      response => {
        console.log(response);
        this.posts = response;
      }
    )
  }

  add = (): void => {
    this.posts.push();
  }

  update=(id:number,property:string,event:any):void =>{
    const text=event.target.textContent;
    this.posts[id][property]=text;
  }

  delete = (index:any): any => {
    this.posts.splice(index, 1);
  }

  ngOnInit(): void {
    this.Posts();
  }


}
