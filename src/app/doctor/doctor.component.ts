import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  uname:string;
  roll:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("username");
    this.roll=sessionStorage.getItem("role");
  }

}
