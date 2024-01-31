import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../../shared/GlobalModel/global.model';
import { addBlog, updateBlog } from '../../shared/blogstore/blog.action';
import { ShareblogidService } from '../../shared/shareblogid.service';
import { getblogbyId } from '../../shared/blogstore/blog.selector';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.css'
})
export class AddBlogComponent implements OnInit {

  FormOpen:boolean=false;
  addBlogForm!:FormGroup;
  isEdit:boolean=false;

  constructor(private fb:FormBuilder,private store:Store<AppStateModel>,private BlogService:ShareblogidService){}
  
  ngOnInit(): void {
    this.addBlogForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.BlogService.selectedId$.subscribe((data)=>{
     
      if(data!==null){
        console.warn("Data received in the subscription", data);
        this.isEdit=true;
        this.getData(data)
        
      }
    })
  }
  get title() { return this.addBlogForm.get('title'); }
  get description() { return this.addBlogForm.get('description'); }


  onSubmit() {
    // Your form submission logic here
    if(!this.isEdit){
    console.log(this.addBlogForm.value);
    const blog={...this.addBlogForm.value};
    this.store.dispatch(addBlog({blog:blog}))
    }else{
      this.BlogService.selectedId$.subscribe((data)=>{
        const blog={id:data,...this.addBlogForm.value}
        console.log(blog)
        this.store.dispatch(updateBlog({blog:blog}))
        this.FormOpen=false;
        this.isEdit=false
        this.addBlogForm.reset()
      })
    }
  }


  click(){
    this.FormOpen=!this.FormOpen
    console.log(this.FormOpen)
  }

  getData(id:any){
    this.store.select(getblogbyId(id)).subscribe(data=>{
      console.log("The selected Data from store ", data);
      
      this.addBlogForm.patchValue(data);
      this.FormOpen=true
    })
  }

}
