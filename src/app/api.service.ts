import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { Posts } from '../app/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url="https://jsonplaceholder.typicode.com/posts";

  getposts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getpostsbyparameter(): Observable<any> {
    let params1 = new HttpParams().set('userId', "1");
    return this.http.get("https://jsonplaceholder.typicode.com/posts", { params: params1 })
  }

  post(value1: Posts): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", value1);
  }

  put(value1: Posts): Observable<any> {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/1", value1);
  }

  patch(value1: Posts): Observable<any> {
    return this.http.patch("https://jsonplaceholder.typicode.com/posts/1", value1);
  }

  delete(): Observable<any> {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/1");
  }

  add(temp1: Posts): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", temp1);
  }

  delete1(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

}

