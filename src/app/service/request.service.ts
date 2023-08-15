import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4';

  constructor(private http: HttpClient) {}

  getArticles(searchMethod: string,  searchValue: string): Observable<any> {
    const url = `${this.apiUrl}/articles?limit=50&${searchMethod}=${searchValue}`;
    console.log('url', url)
    return this.http.get(url).pipe(
        catchError(this.handleError)
    );
  }

  getArticlesById(id:number): Observable<any> {
    const url = `${this.apiUrl}/articles/${id}`;
    console.log('url', url)
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}


