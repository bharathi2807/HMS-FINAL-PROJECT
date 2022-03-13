import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  uname:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("username");
  }

}
