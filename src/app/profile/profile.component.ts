import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService, ModelSortDirection, Post } from '../API.service';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts:Array<Post>;
  username:string;
  currentUsername:string;
  isFollowing:boolean = false;

  constructor(
    private api:APIService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // get the users posts
    this.username = this.route.snapshot.params['username'];
    this.api.ListPostsBySpecificOwner(this.username,null,ModelSortDirection.DESC,null,20,null).then(event=>{
      this.posts = event.items;
    });
    // get current user data
    Auth.currentAuthenticatedUser().then(event=>{
      this.currentUsername = event.username;
      this.api.GetFollowRelationship(this.username,this.currentUsername).then(event=>{
        if(event!==null){
          this.isFollowing = true;
        }
      })
    })
  }

  public toggleFollow():void{
    if(!this.isFollowing){ // do follow if is not folloing now
      const input = {
        followeeId:this.username,
        followerId:this.currentUsername,
        timestamp:Math.floor(new Date().getTime()/1000),
      };
      this.api.CreateFollowRelationship(input).then(event=>{
        this.isFollowing = true;
        console.log('created folloing relationship!');
      }).catch(e=>{
        console.log('error creating fllowing relationshop...');
      });
    }else{ // remove following relationship
      const input = {
        followeeId:this.username,
        followerId:this.currentUsername,
      };
      this.api.DeleteFollowRelationship(input).then(event=>{
        this.isFollowing = false;
        console.log('deleted following relationship!');
      }).catch(e=>{
        console.log('error deleting following relationship...');
      });
    }
  }

}
