import { Component, OnInit } from '@angular/core';
import { Department} from '../department';
import { DepartmentService} from '../department.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit{
department:Department=new Department();

  constructor(private departmentService: DepartmentService,private router: Router){ }
  ngOnInit():void{

  }
    saveDepartment(){
    this.departmentService.createDept(this.department).subscribe(data=>{
       console.log("SUCESSFULLY ADDED",data);
    },
    error=>console.log(error));
    }

    onSubmit(){
    console.log(this.department);
    this.saveDepartment();
  }
}
