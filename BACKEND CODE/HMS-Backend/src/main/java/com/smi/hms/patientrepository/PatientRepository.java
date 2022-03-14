package com.smi.hms.patientrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.smi.hms.patientbean.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient,Integer> {
	@Query("from Patient p where p.pid=?1")
	List<Patient> findByPatientId(int pid);
	
	
	@Query("from Patient l where l.username=?1 and l.password=?2")
	List<Patient> findByUsername(String username,String password);
	
	@Query("from Patient l1 where l1.username=?1")
	Patient changeCredential(String username);
}
