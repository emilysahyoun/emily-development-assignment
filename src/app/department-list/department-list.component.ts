import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments!: Department[];
  constructor(private departmentService: DepartmentService, private router: Router) { }

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments()
  {
    this.departmentService.getDepartmentList().subscribe(data=>{
      this.departments = data;
    });
  }

  departmentUpdate(departmentID: number)
  {
      this.router.navigate(['department-update', departmentID]);
  }
  
  
  departmentDelete(departmentId: number)
  {
    this.departmentService.departmentDelete(departmentId).subscribe(data =>
      {
        console.log(data);
        this.getDepartments();
      })
      alert("Department Deleted");
}
}
