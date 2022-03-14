package com.smi.hms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.staffbean.Staff;

@Repository
public interface MainRepository extends JpaRepository<Staff,Integer> {
	@Query("from Staff s where s.staffid=?1")
	List<Staff> findByStaffId(int staffid);
	
	@Query("from Staff s1 where s1.staffid=?1")
	List<Staff> findByStaff(String  username);
	
	@Query("from Staff s2 where s2.role=?1")
	List<Staff> findSpecialist(String  role);
	
	
	
	@Query("from Staff l where l.username=?1 and l.password=?2")
	List<Staff> findByUsername(String username,String password);
	
	@Query("from Staff l1 where l1.username=?1")
	Staff changeCredential(String username);

}
