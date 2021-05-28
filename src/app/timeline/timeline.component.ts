import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { APIService, ModelSortDirection, Post } from '../API.service';
import { CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  posts:Array<Post>=[];
  currentUserData:CognitoUser;

  constructor(
    private api:APIService,
  ) { }

  async ngOnInit() {
    this.currentUserData = await Auth.currentAuthenticatedUser();
    this.api.ListTimelines(this.currentUserData.getUsername(),null,null,20,null,ModelSortDirection.DESC).then(e=>{
      const posts = e.items;
      posts.forEach(post=>this.posts.push(post.post));
    });
    this.api.OnCreatePostListener.subscribe((event:any)=>{
      const newPost = event.value.data.onCreatePost;
      this.posts = [newPost, ...this.posts];
    });
  }

}
