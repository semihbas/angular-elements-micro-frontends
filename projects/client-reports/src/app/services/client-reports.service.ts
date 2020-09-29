import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientReportsService {

  constructor(private http: HttpClient) { }


  getUserReportRecords(startDate, endDate): Observable<any> { //underlying api call should add icode
    return this.http
      .get(
        `${environment.baseApiEndPoint + environment.pathGetUserReportRecords}?startDate=${startDate}&endDate=${endDate}`
      );
  }

  getUserReportDocumentsAsZip(startDate, endDate): Observable<any> {
    return this.http
      .get(
        `${environment.baseApiEndPoint + environment.pathGetUserReportDocumentsAsZip}?startDate=${startDate}&endDate=${endDate}`
      );
  }

  getUserReportDocumentByReportExecutionId(reportExecutionId): Observable<any> {
    return this.http
      .get(
        `${environment.baseApiEndPoint + environment.pathGetUserReportDocumentByReportExecutionId}/${reportExecutionId}`, { responseType: 'blob', observe: 'response' as 'body' }
      );
  }
}
