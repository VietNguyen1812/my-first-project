import { createFeatureSelector ,createSelector} from "@ngrx/store";
import { BlogModel } from "./blog.common";
import { AppStateModel } from "../Global/AppState.Model";

const getBlogState = createFeatureSelector<AppStateModel[]>('blogs');

export const getBlog = createSelector(getBlogState,(state : any ) => {
  return state
});
