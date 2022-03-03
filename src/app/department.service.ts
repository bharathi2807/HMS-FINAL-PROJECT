import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private baseURL = "http://localhost:8080/api/v1";
  constructor(private httpClient:HttpClient) { }

  getDeptList() :Observable<Department[]>{
    return this.httpClient.get<Department[]>("http://localhost:8080/api/v1/viewdept");
  }
    createDept(department:Department):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/adddept",department);
  }

    getDepartmentById(deptid:number):Observable<Department>{
    return this.httpClient.get<Department>(`${this.baseURL}/bydeptid/${deptid}`);
  }


  getDeptByDid(deptid:number){
    return this.httpClient.get(`${this.baseURL}/deptbydid/${deptid}`);
  }

  updateDept(deptid: number, department: Department): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updatedept/${deptid}`, department);
  }
  deleteDept(deptid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletedept/${deptid}`);
  }
}
