import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../interfaces/Teacher';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contant-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  private apiUrl: string = 'http://localhost:5000/teachers'

  constructor(private http: HttpClient) { }

  // get Parents array from th db.json
  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.apiUrl);
  }

  // add new Teacher to db.json
  addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.post<Teacher>(this.apiUrl, teacher, httpOptions);
  }

  // delete Teacher from admins array
  deleteTeacher(teacher: Teacher): Observable<Teacher>{
    const url = `${this.apiUrl}/${teacher.id}`;
    return this.http.delete<Teacher>(url);
  }
}
