package com.smi.hms.appointmentrepo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smi.hms.appointmentbean.Appointment;


@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Integer> {

}
