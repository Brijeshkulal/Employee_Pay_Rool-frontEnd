import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getUser(){
    return this.httpClient.get(`http://localhost:8080/employeepayrollservice/get`);
  }

  createContact(createBody: { name: string; gender: string; department: string[]; salary: string; startDate: string; note: string; profilePic: string; }){
    return this.httpClient.post(`http://localhost:8080/home/create`, createBody);
  }
}


