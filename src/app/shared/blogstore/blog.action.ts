import { createAction, props } from "@ngrx/store";
import { Blog } from "./blog.model";


export const getBlog = createAction('getBlog');

export const addBlog = createAction('addBlog',props<{blog:Blog}>());

export const updateBlog = createAction('updateBlog',props<{blog:Blog}>());

export const deleteBlog = createAction('deleteBlog',props<{blogId:number}>())