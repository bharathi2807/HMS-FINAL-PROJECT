import { Component, OnInit } from '@angular/core';
import { Medicine} from '../medicine';
import { MedicineService} from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmedicine',
  templateUrl: './addmedicine.component.html',
  styleUrls: ['./addmedicine.component.css']
})
export class AddmedicineComponent implements OnInit{
  medicine:Medicine=new Medicine();

  constructor(private medicineService: MedicineService,private router: Router){ }
  ngOnInit():void{

  }

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
  }

    onSubmit(){
    console.log(this.medicine);
    this.saveMedicine();
    this.goToPatientList();
  }
  goToPatientList(){
    this.router.navigate(['/admin']);
  }

}
