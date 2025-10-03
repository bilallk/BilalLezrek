import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class FeatureService {
  private apiUrl = 'https://localhost:7182/api/Feature';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Feature[]> {
    return this.http.get<Feature[]>(this.apiUrl);
  }

  getById(id: number): Observable<Feature> {
    return this.http.get<Feature>(`${this.apiUrl}/${id}`);
  }

  create(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.apiUrl, feature);
  }

  update(id: number, feature: Feature): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, feature);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  toggleAvailability(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/enable-disable/${id}`,id);
  }
}
