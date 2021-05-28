import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, ModelSortDirection, Post } from '../API.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  posts:Array<Post>;
  public createForm:FormGroup;

  constructor(
    private api:APIService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.api.ListPostsSortedByTimestamp("post",null,ModelSortDirection.DESC,null,20,null).then(event=>{
      this.posts = event.items;
    });
    this.createForm = this.fb.group({
      'content':['',Validators.required]
    });
    this.api.OnCreatePostListener.subscribe((event:any)=>{
      const newPost = event.value.data.onCreatePost;
      this.posts = [newPost, ...this.posts];
    });
  }

  public onCreate(post:Post):void{
    this.api.CreatePostAndTimeline(post.content).then(event=>{
      this.createForm.reset();
      console.log('post created!');
    }).catch(e=>{
      console.log('error createing post...');
    });
  }

}
