import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff'
import { StaffService } from '../staff.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  staffid:number;
  staff: Staff=new Staff();
  constructor(private staffService: StaffService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.staffid=this.route.snapshot.params['staffid']
    this.staffService.getStaffById(this.staffid).subscribe(data=>{
          this.staff=data;
    },
    error=>console.log(error));
  }

    onSubmit(){
      this.staffService.updateStaff(this.staffid,this.staff).subscribe(data =>{
        this.goToStaffList();
      }
      ,error => console.log(error));
   
  }
  goToStaffList(){
    this.router.navigate(['/viewstaff']);
  }
}
