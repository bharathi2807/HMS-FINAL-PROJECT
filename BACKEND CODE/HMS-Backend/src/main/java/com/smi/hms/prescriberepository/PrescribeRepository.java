package com.smi.hms.prescriberepository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.prescribebean.Prescription;

@Repository
public interface PrescribeRepository extends JpaRepository<Prescription,Integer>{
	@Query("from Prescription p  where p.patientid=?1 order by p.date  desc")
	List<Prescription> findByPatientId(int patientid);
	
}
