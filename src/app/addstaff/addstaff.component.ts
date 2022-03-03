import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff'
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit{
  staff:Staff=new Staff();

  constructor(private staffService: StaffService,private router: Router){ }
  ngOnInit():void{
  }
  saveStaff(){
    this.staffService.createStaff(this.staff).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log("Not Saved"));
  }
  onSubmit(){
    console.log(this.staff);
    this.saveStaff();
  }

}
