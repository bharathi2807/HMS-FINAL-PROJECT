import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { PopupsComponent } from '../popups/popups.component';
@Component({
  selector: 'app-patientpasschange',
  templateUrl: './patientpasschange.component.html',
  styleUrls: ['./patientpasschange.component.css']
})
export class PatientpasschangeComponent implements OnInit {
  patient: Patient=new Patient();
  constructor(private dialog:MatDialog,private authenticationService: AuthenticationService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authenticationService.updatePatientCredential(this.patient).subscribe(data =>{
      const dialogConfig=new MatDialogConfig();
      
      dialogConfig.autoFocus=true;
      dialogConfig.width="40%";
      this.dialog.open(PopupsComponent,dialogConfig);
      
    },
    error => console.log(error));
 
}


}
