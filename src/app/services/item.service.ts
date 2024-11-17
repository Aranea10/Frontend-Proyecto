import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items'; // Cambia esto si tu backend está en otro lugar

  constructor(private http: HttpClient) {}

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateItem(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
