import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

import { Sample } from '../sample';
import { Posts } from '../posts';


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
    userId: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
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

    this.form.reset();
  }

  edit1 = (info: any, index: number): any => {
    this.form.setValue({
      userId: info.userId,
      id: info.id,
      title: info.title,
      body: info.body
    })
  }

  edit2 = (): any => {
    let info = new Posts();

    info.userId = this.form.controls['userId'].value;
    info.id = this.form.controls['id'].value;
    info.title = this.form.controls['title'].value;
    info.body = this.form.controls['body'].value;

    let id = Number(info.id);

    this.api.edit(info, id).subscribe(
      data => {
        console.log(data);
        this.get();
        this.form.reset();
      }
    )


  }

  delete = (id: any): void => {
    this.api.productsdelete(id).subscribe(
      data => {
        console.log(data);
        this.get();
      }
    )


  }



  get() {
    this.api.products().subscribe(
      data => {
        this.products = data;
        console.log(data);
      }
    )
  }




  ngOnInit(): void {

    this.get();

  }

}
