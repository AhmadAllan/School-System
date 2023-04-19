import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Admin } from '../interfaces/Admin';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contant-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl: string = 'http://localhost:5000/admins'

  constructor(private http: HttpClient) { }

  // get Admins array from th db.json
  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  addAdmin(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.apiUrl, admin, httpOptions);
  }

  // delete admin from admins array
  deleteAdmin(admin: Admin): Observable<Admin>{
    const url = `${this.apiUrl}/${admin.id}`;
    return this.http.delete<Admin>(url);
  }
}
