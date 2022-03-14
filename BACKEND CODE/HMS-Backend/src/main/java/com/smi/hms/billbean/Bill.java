package com.smi.hms.billbean;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bill")
public class Bill {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int billno;
	int patientid;
	String drname;
	String drug;
	int amount;
	String date;
	
public Bill() {
	// TODO Auto-generated constructor stub
}

public Bill(int patientid, String drname, String drug, int amount, String date) {
	super();
	this.patientid = patientid;
	this.drname = drname;
	this.drug = drug;
	this.amount = amount;
	this.date = date;
}

public int getBillno() {
	return billno;
}

public void setBillno(int billno) {
	this.billno = billno;
}

public int getPatientid() {
	return patientid;
}

public void setPatientid(int patientid) {
	this.patientid = patientid;
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

public int getAmount() {
	return amount;
}

public void setAmount(int amount) {
	this.amount = amount;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

}
