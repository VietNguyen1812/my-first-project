import { createReducer, on } from "@ngrx/store";
import { addBlog, loadBlog } from "./blog.action";
import { BlogState } from "./blog.state";

export const blogReducer = createReducer(BlogState,
  on(loadBlog, (state : any ) => {
    return {
      ...state,


    }
  }),
  on(addBlog, (state,action) => {
    const blog={...action.bloginput}
    return{
      ...state,
      bloglist:[...state.blogList,blog]
    }
  })

  )
