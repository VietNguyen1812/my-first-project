import { createReducer, on } from "@ngrx/store";
import { loadBlog } from "./blog.action";
import { BlogState } from "./blog.state";

export const blogReducer = createReducer(BlogState,
  on(loadBlog, (state : any ) => {
    return {
      ...state,

    }
  })

  )
