import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  uname:string;
  roll:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("username");
    this.roll=sessionStorage.getItem("role");
  }

}
