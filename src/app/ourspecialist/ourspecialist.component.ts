import { Component, OnInit } from '@angular/core';
import { Staff} from '../staff';
import { StaffService } from '../staff.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-ourspecialist',
  templateUrl: './ourspecialist.component.html',
  styleUrls: ['./ourspecialist.component.css']
})
export class OurspecialistComponent implements OnInit {
  staffs:any;
  role='doctor';
  constructor(private staffService: StaffService ,private router:Router) { }

  ngOnInit(): void {
    this.findSpecialist();
  }

  private findSpecialist(){
    this.staffService.viewSpecialist(this.role).subscribe(data =>{
      this.staffs=data;
      console.log(this.staffs);
    });
  }
}
