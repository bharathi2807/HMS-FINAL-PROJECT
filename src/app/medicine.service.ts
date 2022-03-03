import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private baseURL = "http://localhost:8080/api/v1";
  constructor(private httpClient:HttpClient) { }

  getMedicineList() :Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>("http://localhost:8080/api/v1/viewmedicine");
  }
  createMedicine(medicine:Medicine):Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/v1/addmedicine",medicine);
  }

  getMedicineById(medid:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseURL}/bymedid/${medid}`);
  }

  getMedByMid(medid:number){
    return this.httpClient.get(`${this.baseURL}/medbymid/${medid}`);
  }

  updateMedicine(medid: number, medicine: Medicine): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updatemedicine/${medid}`, medicine);
  }
  deleteMedicine(medid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deletemedicine/${medid}`);
  }
}
