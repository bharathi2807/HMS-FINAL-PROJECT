import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {
  uname:string;
  roll:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("username");
    this.roll=sessionStorage.getItem("role");
  }

}
