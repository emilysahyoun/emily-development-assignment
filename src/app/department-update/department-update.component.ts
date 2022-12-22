import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {
  department: Department = new Department();
  departmentID!: number;

  constructor(private departmentService : DepartmentService, router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateDepartment();
  }

  updateDepartment()
  {
      this.departmentID = this.route.snapshot.params['departmentID'];
      this.departmentService.getDepartmentById(this.departmentID).subscribe(data =>
      {
        this.department = data;
      }, 
        error => console.log(error));
        
  }
  onSubmit()
  {
    console.log(this.department);
    this.departmentService.updateDepartment(this.departmentID,this.department).subscribe
    (data =>{}, error => console.log(error));
    alert("Check changes in View Department");

}


}
