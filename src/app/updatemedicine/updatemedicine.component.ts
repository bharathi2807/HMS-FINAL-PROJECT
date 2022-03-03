import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine'
import { MedicineService } from '../medicine.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent implements OnInit {
  medid:number;
  medicine:Medicine=new Medicine();
  constructor(private medicineService: MedicineService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.medid=this.route.snapshot.params['medid']
    this.medicineService.getMedicineById(this.medid).subscribe(data=>{
          this.medicine=data;
    },
    error=>console.log(error));

  }
  onSubmit(){
    this.medicineService.updateMedicine(this.medid,this.medicine).subscribe(data =>{
      this.goToMedicineList();
    }
    ,error => console.log(error));
 
}
goToMedicineList(){
  this.router.navigate(['/viewmedicine']);
}

}
