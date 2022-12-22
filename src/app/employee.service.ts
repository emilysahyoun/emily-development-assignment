import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private URL = "http://localhost:8080/employee"
  constructor(private httpClient: HttpClient) { }
  
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.URL}`);
  }
  createEmployee(employee: Employee): Observable<Object>
  {
      return this.httpClient.post(`${this.URL}`,employee);
  }
  employeeDelete(employeeId: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.URL}/${employeeId}`)
  
  }
  getEmployeeById(employeeId: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.URL}/${employeeId}`)

  }
  updateEmployee(employeeId: number, employee: Employee): Observable<Object>
  {
    return this.httpClient.put(`${this.URL}/${employeeId}`,employee)
  }
 
}
