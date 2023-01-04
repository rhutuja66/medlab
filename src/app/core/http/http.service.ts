import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl: string = 'http://localhost:3000/';
  httpHeaders: HttpHeaders = new HttpHeaders().set(
    'content-type',
    'application/json'
  );
  constructor(private http: HttpClient) {}

  getDetailsFromServer(
    endPoint: string,
    httpParams: HttpParams = new HttpParams()
  ) {
    let url = this.baseUrl + endPoint;
    return this.http.get(url, {
      headers: this.httpHeaders,
      params: httpParams,
    });
  }


  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("client side error", error.error.message);
    } else {
      console.log("Server Side Error", error.message);
    }
    return throwError("We are unable to fetch your request,please try after some time");
  }



}
