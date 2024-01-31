import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../../shared/GlobalModel/global.model';
import { Post, post } from '../../../shared/effectsStore/posts.model';
import { getpost } from '../../../shared/effectsStore/posts.action';
import { getPost, getPostInfo } from '../../../shared/effectsStore/post.selector';

@Component({
  selector: 'app-post-main',
  templateUrl: './post-main.component.html',
  styleUrl: './post-main.component.css'
})
export class PostMainComponent  implements OnInit{
  posts!:Post[];

  postInfo!:post;
  constructor(private Store:Store<AppStateModel>){

  }
  ngOnInit(): void {
    this.Store.dispatch(getpost())
      this.Store.select(getPostInfo).subscribe(data=>{
       console.log(data)
       this.postInfo=data
       console.log(this.posts)
      })
  }
  editPost(id:any){
    console.log(id)
  }
  deletePost(id:any){
    console.log(id)
  }
}
