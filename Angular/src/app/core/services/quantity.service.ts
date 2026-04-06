import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { OperationRequest, OperationResult, HistoryItem } from '../models/models';

@Injectable({ providedIn: 'root' })
export class QuantityService {

  private base = `${environment.apiBase}/quantities`;

  constructor(private http: HttpClient) {}

  compare(req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/compare`, req);
  }

  convert(req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/convert`, req);
  }

  add(req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/add`, req);
  }

  subtract(req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/subtract`, req);
  }

  divide(req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/divide`, req);
  }

  runOperation(op: string, req: OperationRequest): Observable<OperationResult> {
    return this.http.post<OperationResult>(`${this.base}/${op}`, req);
  }

  getHistoryByOperation(op: string): Observable<HistoryItem[]> {
    return this.http.get<HistoryItem[]>(`${this.base}/history/operation/${op.toUpperCase()}`);
  }

  getHistoryByType(type: string): Observable<HistoryItem[]> {
    return this.http.get<HistoryItem[]>(`${this.base}/history/type/${type.toUpperCase()}`);
  }
}
