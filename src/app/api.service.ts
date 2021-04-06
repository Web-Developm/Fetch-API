import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getposts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getpostsbyparameter():Observable<any>{
    let params1=new HttpParams().set('userId',"1");
    return this.http.get("https://jsonplaceholder.typicode.com/posts",{params:params1})
  }


}
