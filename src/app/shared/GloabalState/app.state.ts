import { blogReducer } from '../blogstore/blog.reducer'
import { postReducer } from '../effectsStore/post.reducer'
import {CounterReducer} from '../store/counter.reducer'

export const AppState ={
    counter:CounterReducer,
    blog:blogReducer,
    post:postReducer
}