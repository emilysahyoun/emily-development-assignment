import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>
      {
        console.log(data);
      }, error => console.log(error));
      alert("Check changes in View Employee");
  }


  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();

    
  }

}
