package com.smi.hms.prescribebean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="prescription")
public class Prescription {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int prescid;
	int patientid;
	int drid;
	String drname;
	String drug;
	String strength;
	String dose;
	String duration;
	String date;
	
	 public Prescription() {
		// TODO Auto-generated constructor stub
	}
	public Prescription(int patientid, int drid, String drname, String drug, String strength, String dose,
			String duration, String date) {
		super();
		this.patientid = patientid;
		this.drid = drid;
		this.drname = drname;
		this.drug = drug;
		this.strength = strength;
		this.dose = dose;
		this.duration = duration;
		this.date = date;
	}
	public int getPrescid() {
		return prescid;
	}
	public void setPrescid(int prescid) {
		this.prescid = prescid;
	}
	public int getPatientid() {
		return patientid;
	}
	public void setPatientid(int patientid) {
		this.patientid = patientid;
	}
	public int getDrid() {
		return drid;
	}
	public void setDrid(int drid) {
		this.drid = drid;
	}
	public String getDrname() {
		return drname;
	}
	public void setDrname(String drname) {
		this.drname = drname;
	}
	public String getDrug() {
		return drug;
	}
	public void setDrug(String drug) {
		this.drug = drug;
	}
	public String getStrength() {
		return strength;
	}
	public void setStrength(String strength) {
		this.strength = strength;
	}
	public String getDose() {
		return dose;
	}
	public void setDose(String dose) {
		this.dose = dose;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	 
	
}
