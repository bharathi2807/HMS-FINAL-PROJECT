import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  staffs:any;
  staffid:number;
  constructor(private staffService: StaffService ,private router:Router) { }

  ngOnInit(): void {
    this.getStaff();
  }
  private getStaff(){
    this.staffService.getStaffList().subscribe(data =>{
      this.staffs=data;
    });
  }

  
  findStaffBySid(){
    let resp=this.staffService.getStaffBySid(this.staffid);
    resp.subscribe(data=>this.staffs=data);
  }




  updateStaff(staffid:number){
    this.router.navigate(['updatestaff',staffid]);
  }

  deleteStaff(staffid:number){
    if(confirm("Are you sure want to  delete staff with id:"+staffid)) {
      this.staffService.deleteStaff(staffid).subscribe(data =>{
        console.log(data);
        this.getStaff();
      })
    }
  }
}