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

  constructor(private httpClient: HttpClient) {
  }

  getProducts() {
    this.httpClient.get<any>('http://localhost:5555/products').subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    )
  }






  ngOnInit(): void {
    this.getProducts();
  }

}
