import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from './bill';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient:HttpClient) { }

  createBill(bill:Bill):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addbill",bill);
  }


  getBillByPid(patientid:number){
    return this.httpClient.get(`${this.baseURL}/billbypid/${patientid}`);
  }
}
