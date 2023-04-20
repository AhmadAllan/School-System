import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/Student';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contant-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl: string = 'http://localhost:5000/students'

  constructor(private http: HttpClient) { }

  // get Parents array from th db.json
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  // add new parent to db.json
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student, httpOptions);
  }

  // delete parent from admins array
  deleteStudent(student: Student): Observable<Student>{
    const url = `${this.apiUrl}/${student.id}`;
    return this.http.delete<Student>(url);
  }
}
