import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
employee: Employee = new Employee();
employeeId!: number;
  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
      this.updateEmployee();
 
      }

  updateEmployee()
  {
      this.employeeId = this.route.snapshot.params['employeeId']
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data =>
      {
        this.employee = data;
      }, 
        error => console.log(error));
        
  }
  onSubmit()
  {
    console.log(this.employee);
    this.employeeService.updateEmployee(this.employeeId,this.employee).subscribe
    (data =>{}, error => console.log(error));
    alert("Check changes in View Employee");

}

  }

