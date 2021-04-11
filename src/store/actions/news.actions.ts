import { createAction, props } from "@ngrx/store"

export const LoadNews = createAction('[News Component] Load News');
export const LoadNewsSuccess = createAction('[News Component] News loaded successfully', props<{ news: {id: number }[] }>());
