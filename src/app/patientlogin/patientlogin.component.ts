import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-patientlogin',
  templateUrl: './patientlogin.component.html',
  styleUrls: ['./patientlogin.component.css']
})
export class PatientloginComponent implements OnInit {

logins:any;

username:string;
password:string;
pid:number;
pname:string;

un:string;
id:any;
patientname:any;
error:string;

  constructor(private authenticationService: AuthenticationService,private route: ActivatedRoute,private router:Router) { }



  ngOnInit(): void {
  }
  onSubmit(){
    this.authenticationService.doPatientVerify(this.username,this.password).subscribe(data=>{
    this.logins=data;
    this.un=this.logins.map((t: {username:any;})=>t.username);
    this.id=this.logins.map((t: {pid:any;})=>t.pid);
    this.patientname=this.logins.map((t: {pname:any;})=>t.pname);

   if(this.logins.length!=0){
    sessionStorage.setItem("username",this.un);
    sessionStorage.setItem("patientid",this.id);
    sessionStorage.setItem("patname",this.patientname);
    this.router.navigate(["patient"]);
   }
   else{
    this.error="invalid username or password";
 }
    });
  }
}
