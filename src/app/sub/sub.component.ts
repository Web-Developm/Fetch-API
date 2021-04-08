import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';

import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import {ApiService} from '../api.service';

import { Sample } from '../sample';

export class Products {
  constructor(id: any, name: String, color: String) {
  }
}


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  products: Sample[];

  constructor(private httpClient: HttpClient, private api:ApiService) {
  }













  delete=(id:any):void =>{
    this.api.productsdelete(id).subscribe (
      data=>{
        console.log(data);

      }
    )
  }








  ngOnInit(): void {

    this.api.products().subscribe(
      data=>{
        this.products=data;
        console.log(data);
      }
    )
}

}
