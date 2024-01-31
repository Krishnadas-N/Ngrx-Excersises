import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.model";

export  const LOAD_POST_SUCCESS = '[post page] load post sucess'

export const LOAD_POST_FAILURE = '[post page] load post failure';

export const LOAD_POST = '[post page] load post'

export  const ADD_POST = '[post page] add post success'

export  const ADD_POST_FALIURE = '[post page] add post failure'

export const getpost = createAction(LOAD_POST)

export const loadpostSucess = createAction(LOAD_POST_SUCCESS,props<{postlist:Post[]}>())

export const loadpostFailure = createAction(LOAD_POST_FAILURE, props<{ error: string }>());

export const addpostSucess = createAction(ADD_POST,props <{newPost:Post}>())

export const addpostFailure = createAction(ADD_POST_FALIURE,props<{error:string}>())

