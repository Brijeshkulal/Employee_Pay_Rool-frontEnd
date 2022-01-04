import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserDetails } from 'src/app/service/user-details';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashBoardComponent implements OnInit {
  registerForm!:FormGroup;
  submitted=false;
  user:any;
  
  empDetailList:UserDetails[]=[];

  constructor (private employee:EmployeeService){ }

  ngOnInit(){
    this.employee.getUser().subscribe( data => { 
      this.user=data;
      this.empDetailList=this.user.employeePayrollDataList;
        console.log(this.empDetailList);

         });  
  }

  get f(){
    return this.registerForm.controls;
  }

}
