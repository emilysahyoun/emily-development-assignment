import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private URL = "http://localhost:8080/department"
  constructor(private httpClient: HttpClient) { }
  
  getDepartmentList(): Observable<Department[]>{
    return this.httpClient.get<Department[]>(`${this.URL}`);
  }
  createDepartment(department: Department): Observable<Object>
  {
      return this.httpClient.post(`${this.URL}`,department);
  }
  departmentDelete(departmentId: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.URL}/${departmentId}`)
  
  }
  getDepartmentById(departmentId: number): Observable<Department>
  {
    return this.httpClient.get<Department>(`${this.URL}/${departmentId}`)

  }
  updateDepartment(departmentID: number, department: Department): Observable<Object>
  {
    return this.httpClient.put(`${this.URL}/${departmentID}`,department)
  }
 
}
