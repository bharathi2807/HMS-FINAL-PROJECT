import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Loginclass } from './loginclass';
import { Staff} from './staff';
import { Patient } from './patient';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
public uname:string;
public rol:string;

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient:HttpClient) { }

  doVerify(username:string,password:string){
    return this.httpClient.get(`${this.baseURL}/auth/${username}/${password}`);
  }
  updateCredential(staff:Staff ): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/check`, staff);
  }

  doPatientVerify(username:string,password:string){
    return this.httpClient.get(`${this.baseURL}/authpatient/${username}/${password}`);
  }
  updatePatientCredential(patient:Patient ): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/checkpatient`, patient);
  }



  createLogin(loginClass:Loginclass):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addlogin",loginClass);
  }

}
