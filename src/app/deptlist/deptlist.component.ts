import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../department';
import { DepartmentService } from '../department.service'

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {
  depts:any;
  deptid:number;

  constructor(private departmentService:DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.getDept();
  }
  private getDept(){
    this.departmentService.getDeptList().subscribe(data=>{
      this.depts=data;
    });
  }

  findDeptByDid(){
    let resp=this.departmentService.getDeptByDid(this.deptid);
    resp.subscribe(data=>this.depts=data);
  }

    updateDept(deptid:number){
    this.router.navigate(['updatedept',deptid]);
  }
  
  deleteDept(deptid:number){
    if(confirm("Are you sure want to  delete Department with id:"+deptid)) {
    this.departmentService.deleteDept(deptid).subscribe(data =>{
      console.log(data);
      this.getDept();
    })
  }
  }

}
