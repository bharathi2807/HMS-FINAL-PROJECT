import { Component, OnInit } from '@angular/core';
import { Department } from '../department'
import { DepartmentService } from '../department.service';
import { ActivatedRoute ,Router} from '@angular/router';



@Component({
  selector: 'app-updatedept',
  templateUrl: './updatedept.component.html',
  styleUrls: ['./updatedept.component.css']
})
export class UpdatedeptComponent implements OnInit {
  deptid:number;
  department:Department=new Department();
  constructor(private departmentService: DepartmentService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
        this.deptid=this.route.snapshot.params['deptid']
    this.departmentService.getDepartmentById(this.deptid).subscribe(data=>{
          this.department=data;
    },
    error=>console.log(error));
  }

      onSubmit(){
      this.departmentService.updateDept(this.deptid,this.department).subscribe(data =>{
        this.goToDepartmentList();
      }
      ,error => console.log(error));
   
  }
  goToDepartmentList(){
    this.router.navigate(['/viewdept']);
  }

}
