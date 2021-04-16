import { getNewsState, NewsState } from "../reducers/news.reducer";
import { createSelector } from "@ngrx/store";

export const selectNews = createSelector(
    getNewsState,
        (state: NewsState) => state.news
);

export const areNewsLoaded = createSelector(
    getNewsState,
        (state: NewsState) => state.loaded
);

