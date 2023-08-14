import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.common';

export const loadBlog = createAction('loadBlog')
export const  addBlog = createAction('addBlog', props<{bloginput : BlogModel}>());
