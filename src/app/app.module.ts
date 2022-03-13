import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurspecialistComponent } from './ourspecialist/ourspecialist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PharmaceistComponent } from './pharmaceist/pharmaceist.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AddprescriptionComponent } from './addprescription/addprescription.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AddbillComponent } from './addbill/addbill.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StaffService } from './staff.service';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { UpdatedeptComponent } from './updatedept/updatedept.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { UpdatepatientComponent } from './updatepatient/updatepatient.component';
import { FilterPipe } from './filter.pipe';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewcustomprescriptionComponent } from './viewcustomprescription/viewcustomprescription.component';
import { ViewcustombillComponent } from './viewcustombill/viewcustombill.component';
import { PasschangeComponent } from './passchange/passchange.component';
import { AddloginComponent } from './addlogin/addlogin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { MatDialogModule} from '@angular/material/dialog';
import { PopupsComponent } from './popups/popups.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { PatientComponent } from './patient/patient.component';
import { PatientpasschangeComponent } from './patientpasschange/patientpasschange.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutusComponent,
    OurservicesComponent,
    OurspecialistComponent,
    ContactusComponent,
    NavbarComponent,
    UsersComponent,
    AdminComponent,
    ReceptionistComponent,
    DoctorComponent,
    PharmaceistComponent,
    AdddeptComponent,
    AddstaffComponent,
    AddmedicineComponent,
    AddprescriptionComponent,
    AddpatientComponent,
    AddbillComponent,
    StaffListComponent,
    UpdateStaffComponent,
    DeptlistComponent,
    UpdatedeptComponent,
    MedicinelistComponent,
    UpdatemedicineComponent,
    PatientlistComponent,
    UpdatepatientComponent,
    FilterPipe,
    AppointmentComponent,
    ViewcustomprescriptionComponent,
    ViewcustombillComponent,
    PasschangeComponent,
    AddloginComponent,
    SignupComponent,
    ViewappointmentComponent,
    PopupsComponent,
    PatientloginComponent,
    PatientComponent,
    PatientpasschangeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule ,
    MatButtonModule,
    MatDialogModule


  ],
  providers: [StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
