import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, share } from 'rxjs/operators';
import { ITableData } from '../components/dynamic-table/dynamic-table.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicDataService {
  
  get(skip: number, take: number): Observable<ITableData> {

    const params = new HttpParams({
      fromObject: {
        skip: skip,
        take: take,
      }
    });
    
    const url = "https://localhost:5001/api/dynamicdata";
    return (this.httpClient.get(url, { params: params })
      .pipe(
        //retry(3),
        share(), // https://blog.novanet.no/angular-pitfall-multiple-http-requests-with-rxjs-and-observable-async/
        catchError((error: HttpErrorResponse) => {

        if(error.status === 0) console.log("An error occured: ", error.error);
        else console.error(`Backend returned code ${error.status}, body was: `, error.error);
        return throwError("Something bad happened; please try again later.");
    })) as Observable<ITableData>);
  }

  constructor(private httpClient: HttpClient) { }
}
