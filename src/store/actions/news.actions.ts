import { createAction, props } from "@ngrx/store"

export const LoadNews = createAction('[News Component] Load News');
//export const LoadNewsSuccess = createAction('[News Component] News loaded successfully', props<{ news: {title1: string, text1:string, title2: string, text2:string, title3: string, text3:string, placeholderTitle: string, placeholderText:string }[] }>());

export const LoadNewsSuccess = createAction('[News Component] News loaded successfully', props<{ news: any[] }>());
