import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parent } from '../interfaces/Parent';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contant-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiUrl: string = 'http://localhost:5000/parents'

  constructor(private http: HttpClient) { }

  // get Admins array from th db.json
  getParents(): Observable<Parent[]> {
    return this.http.get<Parent[]>(this.apiUrl);
  }

  addParent(parent: Parent): Observable<Parent> {
    return this.http.post<Parent>(this.apiUrl, parent, httpOptions);
  }

  // delete admin from admins array
  deleteParent(parent: Parent): Observable<Parent>{
    const url = `${this.apiUrl}/${parent.id}`;
    return this.http.delete<Parent>(url);
  }
}
