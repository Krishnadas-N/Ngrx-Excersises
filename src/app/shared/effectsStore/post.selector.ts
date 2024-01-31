import { createFeatureSelector, createSelector } from "@ngrx/store";
import { post } from "./posts.model";


const getPostState = createFeatureSelector<post>('post');

export const getPost = createSelector(getPostState, (state: post) => state.posts);

export const getPostInfo = createSelector(getPostState, (state: post) => state);