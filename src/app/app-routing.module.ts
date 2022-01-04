import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DashBoardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';

const routes :Routes=[
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path:'empForm', component:AddEmployeeComponent},
  {path:'empheader', component:HeaderComponent},
  {path:'dashboard', component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddEmployeeComponent]
