import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { LoadNews, LoadNewsSuccess } from "../actions/news.actions";

export const newsFeatureKey = 'news';

export interface NewsState {
    news: any[],

    // news: { title1: string, text1:string, title2: string, text2:string, title3: string, text3:string, placeholderTitle: string, placeholderText:string }[],
    loaded: boolean
}

export const initialState: NewsState = {
    news: [{  }],

    // news: [{ title1: "string", text1:"string", title2: "string", text2:"string", title3: "string", text3:"string", placeholderTitle: "string", placeholderText:"string" }],
    loaded: false
};

const _newsReducer = createReducer(
    initialState,
    on(LoadNews, state => {
        return { ...state, loaded: false }
    }),
    on(LoadNewsSuccess, (state, action) => {
        return { ...state, news: action.news, loaded: true}
    })
);

export function newsReducer(state: any, action: any) {
    return _newsReducer(state, action);
}

export const getNewsState = createFeatureSelector(newsFeatureKey);