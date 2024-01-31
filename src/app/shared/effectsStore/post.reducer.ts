import { posts } from "./posts.state"
import {addpostFailure, addpostSucess, getpost, loadpostFailure, loadpostSucess} from './posts.action';
import { createReducer, on } from "@ngrx/store";


const _postReducerHelper=createReducer(
    posts,
    on(getpost,(state)=>{
        console.log(state)
        return {
            ...state
        }
    }),
  on(loadpostSucess, (state, action) => {
    console.log(state)
    return { ...state, 
        posts: [...state.posts, ...action.postlist],
        errorMessage:''
    }
  }),
  on(loadpostFailure, (state, action) => {
    console.log(state)
    return { ...state, 
        posts: [],
        errorMessage: action.error
    }
  }),
  on(addpostSucess, (state, action) => {
    console.log(state)
    const updatedPosts = [...state.posts, action.newPost]
    return { ...state, 
        posts:updatedPosts,
        errorMessage: ''
    }
  }),
  on(addpostFailure, (state, action) => {
    console.log(state)
    return { ...state, 
        posts: [],
        errorMessage: action.error
    }
  })
  
    

)




export const postReducer=(state:any,action:any)=>{
    return _postReducerHelper(state,action)
}