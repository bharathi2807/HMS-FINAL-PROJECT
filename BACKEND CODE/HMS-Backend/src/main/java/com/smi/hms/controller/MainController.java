package com.smi.hms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smi.hms.appointmentbean.Appointment;
import com.smi.hms.appointmentrepo.AppointmentRepository;
import com.smi.hms.billbean.Bill;
import com.smi.hms.billrepository.BillRepository;
import com.smi.hms.deptbean.Department;
import com.smi.hms.deptrepository.DeptRepository;
import com.smi.hms.exception.ResourceNotFoundException;
import com.smi.hms.medicinebean.Medicine;
import com.smi.hms.medrepository.MedicineRepository;
import com.smi.hms.patientbean.Patient;
import com.smi.hms.patientrepository.PatientRepository;
import com.smi.hms.prescribebean.Prescription;
import com.smi.hms.prescriberepository.PrescribeRepository;
import com.smi.hms.repository.MainRepository;
import com.smi.hms.staffbean.Staff;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class MainController {

	@Autowired
	MainRepository repo;
	//STAFF CREDENTIALS
	
	@GetMapping("/auth/{username}/{password}")
	public List<Staff> getLogin(@PathVariable String username,@PathVariable String password) {
		return repo.findByUsername(username,password);
	}
	
	//changePWD
	@PutMapping("/check")
	public ResponseEntity <Staff> getCredentials( @RequestBody Staff loginDetails){
		
		String uname=loginDetails.getUsername();
		Staff login= repo.changeCredential(uname);
		login.setUsername(loginDetails.getUsername());
		login.setPassword(loginDetails.getPassword());
		
		
		Staff updatedLogin = repo.save(login);
		return ResponseEntity.ok(updatedLogin);
		
	
	}
	
	
	
	
	

	//ADMIN->STAFF CONTROLLER
	
	//viewAllStaff
	@GetMapping("/viewstaff")
	public List<Staff> getAllStaff(){
		return repo.findAll();
	}
	//addstaff
	@PostMapping("/addstaff")
	public Staff createStaff(@RequestBody Staff staff) {
		return repo.save(staff);
	}
	//viewstaffbyid
	@GetMapping("/byid/{staffid}")
	public ResponseEntity<Staff> getStaffById(@PathVariable int staffid) {
		Staff staff= repo.findById(staffid)
				.orElseThrow(() -> new ResourceNotFoundException("Staff not exist with id :" + staffid));
		return  ResponseEntity.ok(staff);
	}
	//filterStaffById
	@GetMapping("/staffbysid/{staffid}")
	public List<Staff> getStaffBySid(@PathVariable int staffid) {
		return repo.findByStaffId(staffid);
	}
	
	//specialist
	//viewSpecialist
	@GetMapping("/byrole/{role}")
	public List<Staff> getSpecialist(@PathVariable String role) {
		return repo.findSpecialist(role);
		
	}
	
	
	
	//update
	@PutMapping("/updatestaff/{staffid}")
	public ResponseEntity<Staff> updateStaff(@PathVariable int staffid, @RequestBody Staff staffDetails){
		Staff staff = repo.findById(staffid)
				.orElseThrow(() -> new ResourceNotFoundException("Staff  not exist with id :" + staffid));
		
		staff.setName(staffDetails.getName());
		staff.setDeptid(staffDetails.getDeptid());
		staff.setDesig(staffDetails.getDesig());
		staff.setGender(staffDetails.getGender());
		staff.setMobile(staffDetails.getMobile());
		staff.setAddress(staffDetails.getAddress());
		staff.setExperience(staffDetails.getExperience());
		staff.setRole(staffDetails.getRole());
		
		Staff updatedStaff = repo.save(staff);
		return ResponseEntity.ok(updatedStaff);
	}
	
	//deletestaff
	@DeleteMapping("/deletestaff/{staffid}")
	public ResponseEntity< Map<String,Boolean>> deleteStaff(@PathVariable int staffid){
		Staff staff = repo.findById(staffid)
				.orElseThrow(() -> new ResourceNotFoundException("Staff  not exist with id :" + staffid));
		
		repo.delete(staff);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	//ADMIN->DEPARTMENT CONTROLLER
	
	@Autowired
	DeptRepository drepo;
	//viewallDept
	@GetMapping("/viewdept")
	public List<Department> getAllDept(){
		return drepo.findAll();
	}
	
	//addDept
	@PostMapping("/adddept")
	public Department createDept(@RequestBody Department dept) {
		return drepo.save(dept);
	}
	
	//viewdeptbyid
	@GetMapping("/bydeptid/{deptid}")
	public ResponseEntity<Department> getDeptById(@PathVariable int deptid) {
		Department dept= drepo.findById(deptid)
				.orElseThrow(() -> new ResourceNotFoundException("Department not exist with id :" + deptid));
		return  ResponseEntity.ok(dept);
	}
	
	//filterDepartmentById
	@GetMapping("/deptbydid/{deptid}")
	public List<Department> getDeptByDid(@PathVariable int deptid) {
		return drepo.findByDeptId(deptid);
	}
	
	//updateDept
	
	@PutMapping("/updatedept/{deptid}")
	public ResponseEntity<Department> updateDept(@PathVariable int deptid, @RequestBody Department deptDetails){
		Department dept = drepo.findById(deptid)
				.orElseThrow(() -> new ResourceNotFoundException("dept not exist with id :" + deptid));
		
		dept.setDeptname(deptDetails.getDeptname());
		dept.setLocation(deptDetails.getLocation());
		
		Department updatedDept = drepo.save(dept);
		return ResponseEntity.ok(updatedDept);
	}
	
	//deleteDept
	@DeleteMapping("/deletedept/{deptid}")
	public ResponseEntity< Map<String,Boolean>> deleteDept(@PathVariable int deptid){
		Department dept = drepo.findById(deptid)
				.orElseThrow(() -> new ResourceNotFoundException("dept not exist with id :" + deptid));
		
		drepo.delete(dept);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	//ADMIN->MEDICINE CONTROLLER

	@Autowired
	MedicineRepository medrepo;
	
	//viewAllMedicine
	
	@GetMapping("/viewmedicine")
	public List<Medicine> getAllMedicine(){
		return medrepo.findAll();
	}
	
	//addMedicine
	@PostMapping("/addmedicine")
	public Medicine createMedicine(@RequestBody Medicine med) {
		return medrepo.save(med);
	}
	
	//viewmedicinebyid
	@GetMapping("/bymedid/{medid}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable int medid) {
		Medicine med= medrepo.findById(medid)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine not exist with id :" + medid));
		return  ResponseEntity.ok(med);
	}
	
	//filterMedicineById
	@GetMapping("/medbymid/{medid}")
	public List<Medicine> getMedByMid(@PathVariable int medid) {
		return medrepo.findByMedId(medid);
	}
	
	//updateMedicine
	@PutMapping("/updatemedicine/{medid}")
	public ResponseEntity<Medicine> updateMedicine(@PathVariable int medid, @RequestBody Medicine medDetails){
		Medicine med= medrepo.findById(medid)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine not exist with id :" + medid));
		
		med.setMedname(medDetails.getMedname());
		med.setCompany(medDetails.getCompany());
		med.setPrice(medDetails.getPrice());
		med.setExpdate(medDetails.getExpdate());
		med.setDescription(medDetails.getDescription());
		
		Medicine updatedMedicine=medrepo.save(med);
		return ResponseEntity.ok(updatedMedicine);
	}
	
	//deleteMedicine
	@DeleteMapping("/deletemedicine/{medid}")
	public ResponseEntity< Map<String,Boolean>> deleteMedicine(@PathVariable int medid){
		Medicine med= medrepo.findById(medid)
				.orElseThrow(() -> new ResourceNotFoundException("Medicine not exist with id :" + medid));
		
		medrepo.delete(med);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	//Receptionist->Patient Controller
	@Autowired
	PatientRepository prepo;
	
	
	//PATIENT CREDENTIALS
	
	@GetMapping("/authpatient/{username}/{password}")
	public List<Patient> getPatientLogin(@PathVariable String username,@PathVariable String password) {
		return prepo.findByUsername(username,password);
	}
	
	//changePWD
	@PutMapping("/checkpatient")
	public ResponseEntity <Patient> getPatientCredentials( @RequestBody Patient loginDetails){
		
		String uname=loginDetails.getUsername();
		Patient login= prepo.changeCredential(uname);
		login.setUsername(loginDetails.getUsername());
		login.setPassword(loginDetails.getPassword());
		
		
		Patient updatedLogin = prepo.save(login);
		return ResponseEntity.ok(updatedLogin);
		
	
	}
	
	
	
	//ViewAllPatient
	@GetMapping("/viewpatient")
	public List<Patient> getAllPatient(){
		return prepo.findAll();
	}
	
	//addMedicine
	@PostMapping("/addpatient")
	public Patient createPatient(@RequestBody Patient patient) {
		return prepo.save(patient);
	}
	
	//viewPatientById
	@GetMapping("/bypid/{pid}")
	public ResponseEntity<Patient> getPatientById(@PathVariable int pid) {
		Patient p= prepo.findById(pid)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + pid));
		return  ResponseEntity.ok(p);
	}
	
	//filterPatientById
	@GetMapping("/patientbypid/{pid}")
	public List<Patient> getPatientByPid(@PathVariable int pid) {
		return prepo.findByPatientId(pid);
	}
	//updatePatient
	@PutMapping("/updatepatient/{pid}")
	public ResponseEntity<Patient> updatePatient(@PathVariable int pid, @RequestBody Patient patientDetails){
		Patient p= prepo.findById(pid)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + pid));
		
		p.setPname(patientDetails.getPname());
		p.setDob(patientDetails.getDob());
		p.setFathername(patientDetails.getFathername());
		p.setTreatment(patientDetails.getTreatment());
		p.setMobile(patientDetails.getMobile());
		p.setEmail(patientDetails.getEmail());
		p.setAddress(patientDetails.getAddress());
		
		Patient updatedPatient=prepo.save(p);
		return ResponseEntity.ok(updatedPatient);
		
	}
	//deletePatient
	@DeleteMapping("/deletepatient/{pid}")
	public ResponseEntity< Map<String,Boolean>> deletePatient(@PathVariable int pid){
		Patient p= prepo.findById(pid)
				.orElseThrow(() -> new ResourceNotFoundException("Patient not exist with id :" + pid));
		
		prepo.delete(p);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	//DOCTOR->PRESCRIPTION CONTROLLER
	//addPrescription
	@Autowired
	PrescribeRepository prerepo;
	@PostMapping("/addprescription")
	public Prescription createPrescription(@RequestBody Prescription pre) {
		return prerepo.save(pre);
	}
	
	//viewPrescriptionByPatientId
	
	@GetMapping("/prescriptionbypid/{patientid}")
	public List<Prescription> getPrescriptionById(@PathVariable int patientid) {
		return prerepo.findByPatientId(patientid);
	
	}
	
	//PHARMACEIST->BILL CONTRORLLER
	//addBill
	@Autowired
	BillRepository brepo;
	@PostMapping("/addbill")
	public Bill createBill(@RequestBody Bill bill) {
		return brepo.save(bill);
	}
	//viewBillByPatientId

	@GetMapping("/billbypid/{patientid}")
	public List<Bill> getBillById(@PathVariable int patientid) {
		return brepo.findByPatientId(patientid);
	
	}
	
	//APPOINTMENT MODULE
	//ADD APPOINTMENT
	@Autowired
	AppointmentRepository apprepo;
	
	//addAppointment[PATIENT]
	@PostMapping("/addappointment")
	public Appointment createAppointment(@RequestBody Appointment app) {
		return apprepo.save(app);
	}
	
	//viewAllAppointment[RECEPTIONIST]
	@GetMapping("/viewappointment")
	public List<Appointment> getAllAppointment(){
		return apprepo.findAll();
	}
	
	
}
