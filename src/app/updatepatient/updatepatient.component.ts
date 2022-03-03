import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  pid:number;
  patient: Patient=new Patient();
  constructor(private patientService: PatientService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.pid=this.route.snapshot.params['pid']
    this.patientService.getPatientById(this.pid).subscribe(data=>{
          this.patient=data;
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.patientService.updatePatient(this.pid,this.patient).subscribe(data =>{
      this.goToPatientList();
    }
    ,error => console.log(error));
 
}
goToPatientList(){
  this.router.navigate(['/viewpatient']);
}

}
