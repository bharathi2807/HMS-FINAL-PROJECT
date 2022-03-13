import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './staff';
import { Appointment} from './appointment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient:HttpClient) { }

  getStaffList() :Observable<Staff[]>{
    return this.httpClient.get<Staff[]>("http://localhost:8080/api/v1/viewstaff");
  }

  createStaff(staff:Staff):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addstaff",staff);
  }

  getStaffById(staffid:number):Observable<Staff>{
    return this.httpClient.get<Staff>(`${this.baseURL}/byid/${staffid}`);
  }

  getStaffBySid(staffid:number){
    return this.httpClient.get(`${this.baseURL}/staffbysid/${staffid}`);
  }


  updateStaff(staffid: number, staff: Staff): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updatestaff/${staffid}`, staff);
  }
  deleteStaff(staffid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletestaff/${staffid}`);
  }


viewSpecialist(role:string){
  return this.httpClient.get(`${this.baseURL}/byrole/${role}`);
}


//appointment add and view

getAppList() :Observable<Appointment[]>{
  return this.httpClient.get<Appointment[]>("http://localhost:8080/api/v1/viewappointment");
}

createAppointment(app:Appointment):Observable<Object>{
  return this.httpClient.post("http://localhost:8080/api/v1/addappointment",app);
}

}
