import { createReducer, on } from '@ngrx/store';
import { fetchDataByTitleSuccess, fetchDataByTitleFailure, fetchDataBySummarySuccess, fetchDataBySummaryFailure } from './actions';

export type Articles =  {
  id: number,
  title: string,
  "url": string,
  "image_url": string,
  "news_site": string,
  "summary": string,
  "published_at": string,
  "updated_at": string,
  "featured": boolean,
  "launches": any,
  "events": any
}

export type ReducerArticles = {
  summaryData: Articles[] | null
  titleData: Articles[] | null
  error: boolean | null
}

const initialState: ReducerArticles = {
  summaryData: null,
  titleData: null,
  error: null
};

export const reducerArticle = createReducer(
  initialState,
  on(fetchDataByTitleSuccess, (state, { data }) => {
    console.log('fetchDataByTitleSuccess', data.data.results)
    return { ...state, titleData: data.data.results }
  }),
  on(fetchDataByTitleFailure, (state, { error }) => {
    console.log('fetchDataFailure')
    return { ...state, error }
  }),
  on(fetchDataBySummarySuccess, (state, { data }) => {
    console.log('fetchDataBySummarySuccess', data.data.results)
    return { ...state, summaryData: data.data.results }
  }),
  on(fetchDataBySummaryFailure, (state, { error }) => {
    console.log('fetchDataBySummaryFailure')
    return { ...state, error }
  }),
);
