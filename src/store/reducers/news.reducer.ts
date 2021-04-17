import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { LoadNews, LoadNewsSuccess } from "../actions/news.actions";

export const newsFeatureKey = 'news';

export interface NewsState {
    news: { title: string, text: string }[],
    loaded: boolean
}

export const initialState: NewsState = {
    news: [{ title: "", text: "" }],
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