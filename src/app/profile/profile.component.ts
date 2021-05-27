import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, ModelSortDirection, Post } from '../API.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts:Array<Post>;
  username:string;

  constructor(
    private api:APIService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.api.ListPostsBySpecificOwner(this.username,null,ModelSortDirection.DESC,null,20,null).then(event=>{
      this.posts = event.items;
    });
  }

}
