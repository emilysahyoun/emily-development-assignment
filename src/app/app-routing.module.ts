import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './department-create/department-create.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentUpdateComponent } from './department-update/department-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employee-create', component: EmployeeCreateComponent },
  {path: 'employee-update/:employeeId', component: EmployeeUpdateComponent},
  {path: 'department', component: DepartmentListComponent},
  {path: 'department-create', component:DepartmentCreateComponent},
  {path: 'department-update/:departmentID', component:DepartmentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
