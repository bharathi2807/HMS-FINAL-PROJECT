import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent  implements OnInit{
  patient:Patient=new Patient();
  
  constructor(private patientService: PatientService,private router: Router){ }
  ngOnInit():void{
  }

  savePatient(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log("Not Saved"));
  }
  onSubmit(){
    console.log(this.patient);
    this.savePatient();
    this.goToPatientList();
  }
  goToPatientList(){
    this.router.navigate(['/reception']);
  }
}
