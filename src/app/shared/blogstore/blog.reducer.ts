import { createReducer, on } from "@ngrx/store"
import { BlogState } from "./blog.state"
import { addBlog, deleteBlog, getBlog, updateBlog } from "./blog.action"
import { Blog } from "./blog.model"

const _blogReducerHelper=createReducer(BlogState,
    on(getBlog,(state)=>{
        return{
            ...state
           
        }
    }),
    on(addBlog,(state,action)=>{
        const _data ={...action.blog}
        _data.id=state.bloglist.length+1 
        return{
            ...state,
            bloglist:[ ...state.bloglist,_data]
        }
    }
    ),
    on(updateBlog,(state,action)=>{
        const _data ={...action.blog};
        const updateBlog = state.bloglist.map((blog:Blog)=>{
              return  blog.id===_data.id?_data:blog;
        })
        return{
            ...state,
            bloglist:updateBlog
        }
    }
    ),
    on(deleteBlog,(state,action)=>{
        console.log(action.blogId)
        const updateBlog = state.bloglist.filter((blog:Blog)=>{
              return  blog.id!==action.blogId
        })
        return{
            ...state,
            bloglist:updateBlog
        }
    }
    ),

    

)




export const blogReducer=(state:any,action:any)=>{
    return _blogReducerHelper(state,action)
}