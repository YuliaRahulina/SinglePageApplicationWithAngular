import {createSelector} from '@ngrx/store';
import {AppState} from "../app.state";
import {ReducerArticles} from "./reducers";

export const selectArticle = (state: AppState) => state.article;
export const selectArticlesTitleDate = createSelector(selectArticle, (state: ReducerArticles) => state.titleData);
export const selectArticlesSummaryDate = createSelector(selectArticle, (state: ReducerArticles) => state.summaryData);
