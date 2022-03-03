import { Component, OnInit } from '@angular/core';
import { Bill} from '../bill';
import { BillService} from '../bill.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-viewcustombill',
  templateUrl: './viewcustombill.component.html',
  styleUrls: ['./viewcustombill.component.css']
})
export class ViewcustombillComponent implements OnInit {
  bills:any;
  patientid:number;
  constructor(private billService: BillService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  findBillByPatientid(){
    let resp=this.billService.getBillByPid(this.patientid);
    resp.subscribe(data=>this.bills=data);
  }
}
