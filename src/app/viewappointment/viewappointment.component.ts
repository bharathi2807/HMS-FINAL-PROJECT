import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  apps:any;

  constructor(private staffService: StaffService ,private router:Router) { }

  ngOnInit(): void {
    this.getAppointment();
  }
  private getAppointment(){
    this.staffService.getAppList().subscribe(data =>{
      this.apps=data;
    });
  }

}
