import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prescription } from './prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private baseURL = "http://localhost:8080/api/v1";
  constructor(private httpClient:HttpClient) { }

  createPrescription(prescription:Prescription):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addprescription",prescription);
  }

   getPrescriptionByPid(patientid:number){
    return this.httpClient.get(`${this.baseURL}/prescriptionbypid/${patientid}`);
  }
}
