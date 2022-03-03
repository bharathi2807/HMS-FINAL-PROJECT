import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine'
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit {
  medicines:any;
  medid:number;
  constructor(private medicineService: MedicineService ,private router:Router) { }

  ngOnInit(): void {
    this.getMedicine();
  }
private getMedicine(){
  this.medicineService.getMedicineList().subscribe(data =>{
    this.medicines=data;
  });
}

  
findMedByMid(){
  let resp=this.medicineService.getMedByMid(this.medid);
  resp.subscribe(data=>this.medicines=data);
}

updateMedicine(medid:number){
  this.router.navigate(['updatemedicine',medid]);
}

deleteMedicine(medid:number){
  if(confirm("Are you sure want to  delete Medicine with id:"+medid)) {
  this.medicineService.deleteMedicine(medid).subscribe(data =>{
    console.log(data);
    this.getMedicine();
  })
}
}


}
