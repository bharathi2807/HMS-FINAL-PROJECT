import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-pharmaceist',
  templateUrl: './pharmaceist.component.html',
  styleUrls: ['./pharmaceist.component.css']
})
export class PharmaceistComponent implements OnInit {
  uname:string;
  roll:string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.uname=sessionStorage.getItem("username");
    this.roll=sessionStorage.getItem("role");
  }

}
