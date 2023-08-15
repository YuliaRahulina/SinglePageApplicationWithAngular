import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RequestService } from '../../service/request.service';
import { fetchDataByTitle, fetchDataBySummary, fetchDataByTitleSuccess, fetchDataByTitleFailure } from './actions';

@Injectable()
export class AppStateEffects {
  constructor(private actions$: Actions, private requestService: RequestService) {}

  fetchDataByTitle = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchDataByTitle),
      tap(action => {
        console.log('Data received from action:', action.searchValue);
      }),
      mergeMap((action) =>
        this.requestService.getArticles('title_contains_one', action.searchValue).pipe(
          map(data => fetchDataByTitleSuccess({ data })),
          catchError(error => of(fetchDataByTitleFailure({ error })))
        )
      )
    )
  );

  fetchDataBySummary = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchDataBySummary),
      tap(action => {
        console.log('Data received from action:', action.searchValue);
      }),
      mergeMap((action) =>
        this.requestService.getArticles('summary_contains_one', action.searchValue).pipe(
          map(data => fetchDataByTitleSuccess({ data })),
          catchError(error => of(fetchDataByTitleFailure({ error })))
        )
      )
    )
  );
}
