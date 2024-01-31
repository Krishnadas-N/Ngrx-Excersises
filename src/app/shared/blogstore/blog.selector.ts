import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { Blog, Blogs } from "./blog.model";


const getBlogState=createFeatureSelector<Blogs>('blog');

export const getblog=createSelector(getBlogState,
    (state)=> state.bloglist);

    
export const getbloginfo =createSelector(getBlogState,(state)=>{
    return state;
})


export const getblogbyId=(blogid:number)=>createSelector(getBlogState , (state) =>{
  
    return state.bloglist.find((data:Blog)=>data.id===blogid) as Blog;
})