
package com.smi.hms.deptrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.deptbean.Department;

@Repository
public interface DeptRepository extends JpaRepository<Department,Integer> {
	@Query("from Department d where d.deptid=?1")
	List<Department> findByDeptId(int deptid);
}
