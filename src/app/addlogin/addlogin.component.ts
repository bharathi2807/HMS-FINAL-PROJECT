import { Component, OnInit } from '@angular/core';
import { Loginclass} from '../loginclass';
import { AuthenticationService} from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-addlogin',
  templateUrl: './addlogin.component.html',
  styleUrls: ['./addlogin.component.css']
})
export class AddloginComponent implements OnInit {
  login: Loginclass=new Loginclass();
  constructor(private authenticationService: AuthenticationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  saveLogin(){
    this.authenticationService.createLogin(this.login).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
    }

    onSubmit(){
    console.log(this.login);
    this.saveLogin();
    }

}
