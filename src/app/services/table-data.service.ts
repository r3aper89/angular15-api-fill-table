import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor(private http: HttpClient) {}

  getAllData(): Observable<any> {
    return this.http.get(`http://localhost:3000/tabledata/`);
  }

  getDataById(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/tabledata?id=${id}`);
  }

  clearTableEvent: EventEmitter<void> = new EventEmitter<void>();

  clearTable() {
    this.clearTableEvent.emit();
  }
}
