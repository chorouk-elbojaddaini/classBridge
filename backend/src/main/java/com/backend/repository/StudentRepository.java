package com.backend.repository;

import com.backend.entity.StudentData;
import com.backend.model.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentData,Long> {

    StudentData save(StudentData studentData);
}
