import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddbillComponent } from './addbill/addbill.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurspecialistComponent } from './ourspecialist/ourspecialist.component';
import { PharmaceistComponent } from './pharmaceist/pharmaceist.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { UsersComponent } from './users/users.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { UpdatedeptComponent } from './updatedept/updatedept.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { AppointmentComponent} from './appointment/appointment.component';
import { ViewcustomprescriptionComponent} from './viewcustomprescription/viewcustomprescription.component';
import { ViewcustombillComponent } from './viewcustombill/viewcustombill.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"services",component:OurservicesComponent},
  {path:"specialist",component:OurspecialistComponent},
  {path:"users",component:UsersComponent},
  {path:"login",component:LoginComponent},
  {path:"contact",component:ContactusComponent},
  {path:"admin",component:AdminComponent},
  {path:"reception",component:ReceptionistComponent},
  {path:"doctor",component:DoctorComponent},
  {path:"pharmacy",component:PharmaceistComponent},
  {path:"adddept",component:AdddeptComponent},
  {path:"addstaff",component:AddstaffComponent},
  {path:"addmedicine",component:AddmedicineComponent},
  {path:"addprescription",component:AddprescriptionComponent},
  {path:"addpatient",component:AddpatientComponent},
  {path:"addbill",component:AddbillComponent},
  {path:"viewstaff",component:StaffListComponent},
  {path:"updatestaff/:staffid",component:UpdateStaffComponent},
  {path:"viewdept",component:DeptlistComponent},
  {path:"updatedept/:deptid",component:UpdatedeptComponent},
  {path: "viewmedicine",component:MedicinelistComponent},
  {path: "updatemedicine/:medid",component:UpdatemedicineComponent},
  {path: "updatepatient/:pid",component:UpdatepatientComponent},
  {path: "viewpatient",component:PatientlistComponent},
  {path:"appointment",component:AppointmentComponent},
  {path:"viewprescribebypid",component:ViewcustomprescriptionComponent},
  {path:"viewbillbypid",component:ViewcustombillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
