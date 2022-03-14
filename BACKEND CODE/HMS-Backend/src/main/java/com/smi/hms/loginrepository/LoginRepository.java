package com.smi.hms.loginrepository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.smi.hms.loginbean.Login;


@Repository
public interface LoginRepository extends JpaRepository<Login,Integer>{
	@Query("from Login l where l.username=?1 and l.password=?2")
	List<Login> findByUsername(String username,String password);
	
	@Query("from Login l1 where l1.username=?1")
	Login changeCredential(String username);
	
}
