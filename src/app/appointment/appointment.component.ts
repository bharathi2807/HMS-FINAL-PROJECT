import { Component, OnInit } from '@angular/core';
import { Appointment} from '../appointment';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  app:Appointment=new Appointment();

id:any;
name:any;


  constructor(private staffService: StaffService,private router: Router) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem("patientid");
    this.name=sessionStorage.getItem("patname");
    console.log(this.id);
    console.log(this.name);
  }

  saveAppointment(){
    this.staffService.createAppointment(this.app).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
    }

    onSubmit(){
   
    console.log(this.app);
    this.saveAppointment();
    this.goToPatient();
    }
    goToPatient(){
      alert("Appointment Booked sucessfully...Confirmation Mail Will Be Sent To Your Mail Id...")
      this.router.navigate(["patient"]);
    }

}
