import { createAction } from '@ngrx/store';

export const fetchDataByTitle = createAction('[Data] Fetch Data By Title', (searchValue = '') => ({ searchValue }));
export const fetchDataByTitleSuccess = createAction('[Data] Fetch Data By Title Success', (data: any) => ({ data }));
export const fetchDataByTitleFailure = createAction('[Data] Fetch Data By Title Failure', (error: any) => ({ error }));



export const fetchDataBySummary = createAction('[Data] Fetch Data By Summary', (searchValue = '') => ({ searchValue }));
export const fetchDataBySummarySuccess = createAction('[Data] Fetch Data By Summary Success', (data: any) => ({ data }));
export const fetchDataBySummaryFailure = createAction('[Data] Fetch Data By Summary Failure', (error: any) => ({ error }));
