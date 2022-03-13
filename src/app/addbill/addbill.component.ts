import { Component, OnInit } from '@angular/core';
import { Bill} from '../bill';
import { BillService} from '../bill.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addbill',
  templateUrl: './addbill.component.html',
  styleUrls: ['./addbill.component.css']
})

export class AddbillComponent implements OnInit{
bill:Bill=new Bill();
  constructor(private billService: BillService,private router: Router){ }
  ngOnInit():void{

  }

    saveBill(){
    this.billService.createBill(this.bill).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
    }

    onSubmit(){
    console.log(this.bill);
    this.saveBill();
    this.goToPatientList();
    }
    goToPatientList(){
      this.router.navigate(['/pharmacy']);
    }

}
