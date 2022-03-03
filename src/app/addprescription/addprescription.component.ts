import { Component, OnInit } from '@angular/core';
import { Prescription} from '../prescription';
import { PrescriptionService} from '../prescription.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addprescription',
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.css']
})
export class AddprescriptionComponent implements OnInit{

  prescription:Prescription=new Prescription();

  constructor(private prescriptionService: PrescriptionService,private router: Router){ }
  ngOnInit():void{

  }

  savePrescription(){
    this.prescriptionService.createPrescription(this.prescription).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
    }

    onSubmit(){
    console.log(this.prescription);
    this.savePrescription();
  }

}
