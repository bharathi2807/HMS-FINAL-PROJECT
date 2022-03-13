import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logins:any;

username:string;
password:string;

un:string;
roles:string;
error:string;



  constructor(private authenticationService: AuthenticationService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {

  }
  onSubmit(){
    this.authenticationService.doVerify(this.username,this.password).subscribe(data=>{
    this.logins=data;
    this.roles=this.logins.map((t: {role:any;})=>t.role);
    this.un=this.logins.map((t: {username:any;})=>t.username);

   if(this.roles=="admin"){
     sessionStorage.setItem("username",this.un);
     sessionStorage.setItem("role",this.roles);
     this.router.navigate(["admin"]);
   }
   else if(this.roles=="doctor"){
    sessionStorage.setItem("username",this.un);
    sessionStorage.setItem("role",this.roles);
     this.router.navigate(["doctor"]);

   }
   else if(this.roles=="receptionist"){
    sessionStorage.setItem("username",this.un);
    sessionStorage.setItem("role",this.roles);
    this.router.navigate(["reception"]);

  }
  else if(this.roles=="pharmaceist"){
    sessionStorage.setItem("username",this.un);
    sessionStorage.setItem("role",this.roles);
    this.router.navigate(["pharmacy"]);

  }
  else if(this.roles=="patient"){
    sessionStorage.setItem("username",this.un);
    sessionStorage.setItem("role",this.roles);
    this.router.navigate(["patient"]);
  }
  else{
     this.error="invalid username or password";
  }
    });
}

}
