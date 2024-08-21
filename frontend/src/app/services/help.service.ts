import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Help } from '../models/help';

@Injectable({
  providedIn: 'root'
})
export class HelpService { // Aqui fazemos a requisição para a API
  private apiUrl = 'https://api.example.com/helps';

  constructor(private http: HttpClient) {}

  getHelps(): Observable<Help[]> { // Aqui fazemos a requisição para a API
    return this.http.get<Help[]>(this.apiUrl);
  }

  getHelp(id: string): Observable<Help> { // Aqui fazemos a requisição para a API
    return this.http.get<Help>(`${this.apiUrl}/${id}`);
  }

  createHelp(help: Help): Observable<Help> {
    return this.http.post<Help>(this.apiUrl, help);
  }
}
