package com.smi.hms.medrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.medicinebean.Medicine;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Integer>{
	@Query("from Medicine m where m.medid=?1")
	List<Medicine> findByMedId(int medid);
}
