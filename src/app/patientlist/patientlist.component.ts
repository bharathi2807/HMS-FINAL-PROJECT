import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  patients:any;
  pid:number;
  constructor(private patientService: PatientService ,private router:Router) { }

  ngOnInit(): void {
    this.getPatient();
  }

  private getPatient(){
    this.patientService.getPatientList().subscribe(data =>{
      this.patients=data;
    });
  }

  findPatientByPid(){
    let resp=this.patientService.getPatientByPid(this.pid);
    resp.subscribe(data=>this.patients=data);
  }


  updatePatient(pid:number){
    this.router.navigate(['updatepatient',pid]);
  }

  deletePatient(pid:number){
    if(confirm("Are you sure want to  delete patient with id:"+pid)) {
      this.patientService.deletePatient(pid).subscribe(data =>{
        console.log(data);
        this.getPatient();
      })
    }
  }

}
