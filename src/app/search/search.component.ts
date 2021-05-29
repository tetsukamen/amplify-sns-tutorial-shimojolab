import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { APIService, Post } from '../API.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  posts:Array<Post>;
  public searchForm:FormControl;

  constructor(
    private api:APIService,
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormControl();
  }

  async search(inputString:string){
    const param = {
      content:{
        match:inputString
      }
    };
    this.posts = await this.api.SearchPosts(param).then(e=>e.items);
  }

}
