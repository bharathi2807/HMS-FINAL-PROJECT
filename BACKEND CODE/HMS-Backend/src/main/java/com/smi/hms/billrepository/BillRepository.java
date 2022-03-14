package com.smi.hms.billrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.billbean.Bill;


@Repository
public interface BillRepository extends JpaRepository<Bill,Integer> {
	@Query("from Bill b where b.patientid=?1 order by b.date  desc")
	List<Bill> findByPatientId(int patientid);
}
