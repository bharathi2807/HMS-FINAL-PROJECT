import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { PopupsComponent } from '../popups/popups.component';
@Component({
  selector: 'app-passchange',
  templateUrl: './passchange.component.html',
  styleUrls: ['./passchange.component.css']
})
export class PasschangeComponent implements OnInit {
staff: Staff=new Staff();
  constructor(private dialog:MatDialog,private authenticationService: AuthenticationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  

  }


  onSubmit(){
    this.authenticationService.updateCredential(this.staff).subscribe(data =>{
      const dialogConfig=new MatDialogConfig();
      
      dialogConfig.autoFocus=true;
      dialogConfig.width="40%";
      this.dialog.open(PopupsComponent,dialogConfig);
      
    },
    error => console.log(error));
 
}

}
