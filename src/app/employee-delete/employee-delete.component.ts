import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employees!: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees()
  {
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees = data;
    });
  }

  employeeDelete(employeeId: number)
  {
    this.employeeService.employeeDelete(employeeId).subscribe(data =>
      {
        console.log(data);
        this.getEmployees();
      })
  }

}
