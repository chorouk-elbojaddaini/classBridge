package com.backend.repository;

import com.backend.entity.Classe;
import com.backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course,Long> {
    @Query("SELECT c FROM Course c WHERE c.classe.idClass = :classeId")
    List<Course> findAll(Long classeId);
    Course save(Course course);
}
