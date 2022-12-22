import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css']
})
export class DepartmentCreateComponent implements OnInit {
  department: Department = new Department();
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }
  saveDepartment(){
    this.departmentService.createDepartment(this.department).subscribe(data =>
      {
        console.log(data);
      }, error => console.log(error));
      alert("Check changes in View Department");
  }


  onSubmit()
  {
    console.log(this.department);
    this.saveDepartment();

    
  }
  

}
