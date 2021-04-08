import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders,HttpResponse} from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

import { Sample } from '../sample';


export class Products {
  constructor() {
  }
}


@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  public products: Sample[];

  objPosts: Sample;
  objPuts: Sample;


  constructor(private httpClient: HttpClient, private api: ApiService) {
  }

  form = new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  });


  add = (): any => {
    let temp = new Sample();
    temp.userId = this.form.controls['userId'].value;
    temp.id = this.form.controls['id'].value;
    temp.title = this.form.controls['title'].value;
    temp.body = this.form.controls['body'].value;

    this.api.productsadd(temp).subscribe(
      data => {
        console.log(data);

        this.api.products().subscribe(
          data => {
            this.products = data;
            console.log(data);
          }
        )
      }
    )
  }

  /*edit=(info:any,index:number):any=>{
    this.form.setValue({
      userId:info.userId,
      id:info.id,
      title:info.title,
      body:info.body
    })
  }*/

  edit = (): any => {
    let temp = new Sample();
    temp.userId = 1;
    temp.id = 12;
    temp.title = "lenovo";
    temp.body = "Ideapad";

    this.api.edit(temp).subscribe(
      data => {
        console.log(data);

        this.api.products().subscribe(
          data => {
            this.products = data;
            console.log(data);
          }
        )

      }
    )



  }













  delete = (id: any): void => {
    this.api.productsdelete(id).subscribe(
      data => {
        console.log(data);

      }
    )
  }








  ngOnInit(): void {

    this.api.products().subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )





  }

}
