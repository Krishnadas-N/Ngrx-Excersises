import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Blog } from '../../shared/blogstore/blog.model';
import { getblog } from '../../shared/blogstore/blog.selector';
import { AppStateModel } from '../../shared/GlobalModel/global.model';
import { ShareblogidService } from '../../shared/shareblogid.service';
import { deleteBlog } from '../../shared/blogstore/blog.action';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogs:Blog[]=[]
  constructor(private store:Store<AppStateModel>,private blogService:ShareblogidService){}
  ngOnInit(): void {

   this.store.select(getblog).subscribe(data=>{
    this.blogs=data;
    console.log(data)
    console.log(this.blogs)
    });
  }

  Edit(id:any){
   this.blogService.setSelectedId(id);
  }

  remove(id:number){
    if(confirm("are you sure to do this")){
      this.store.dispatch(deleteBlog({blogId:id}))
    }
  }
}
