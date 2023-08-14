import { createFeatureSelector ,createSelector} from "@ngrx/store";
import { BlogModel, Blogs } from "./blog.common";
import { AppStateModel } from "../Global/AppState.Model";

const getBlogState = createFeatureSelector<Blogs>('blogs');

export const getBlog = createSelector(getBlogState,(state : any ) => {
  return state.blogList
});
