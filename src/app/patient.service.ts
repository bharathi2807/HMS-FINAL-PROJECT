import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';



@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseURL = "http://localhost:8080/api/v1";
  constructor(private httpClient:HttpClient) { }

  getPatientList() :Observable<Patient[]>{
    return this.httpClient.get<Patient[]>("http://localhost:8080/api/v1/viewpatient");
  }

  createPatient(patient:Patient):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addpatient",patient);
  }

  getPatientById(pid:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/bypid/${pid}`);
  }

  getPatientByPid(pid:number){
    return this.httpClient.get(`${this.baseURL}/patientbypid/${pid}`);
  }

  updatePatient(pid: number, patient: Patient): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updatepatient/${pid}`, patient);
  }
  deletePatient(pid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletepatient/${pid}`);
  }

}
