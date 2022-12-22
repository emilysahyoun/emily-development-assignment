import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees()
  {
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees = data;
    });
  }

  employeeUpdate(employeeID: number)
  {
      this.router.navigate(['employee-update', employeeID]);
  }
  
  
  employeeDelete(employeeId: number)
  {
    this.employeeService.employeeDelete(employeeId).subscribe(data =>
      {
        console.log(data);
        this.getEmployees();
      })
      alert("Employee Deleted");

  }

  

}
