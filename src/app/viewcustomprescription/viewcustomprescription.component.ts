import { Component, OnInit } from '@angular/core';
import { Prescription} from '../prescription';
import { PrescriptionService} from '../prescription.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-viewcustomprescription',
  templateUrl: './viewcustomprescription.component.html',
  styleUrls: ['./viewcustomprescription.component.css']
})
export class ViewcustomprescriptionComponent implements OnInit {
  prescriptions:any;
  patientid:number;
  
  constructor(private prescriptionService: PrescriptionService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

  }

  findPrescriptionByPatientid(){
    let resp=this.prescriptionService.getPrescriptionByPid(this.patientid);
    resp.subscribe(data=>this.prescriptions=data);
  }

}
