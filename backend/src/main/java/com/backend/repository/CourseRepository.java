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

   /* @Query(value = "SELECT  c.id_course, c.course_name , c.description , c.date , c.file_path  FROM course c WHERE c.classe.idClass = :idClass", nativeQuery = true)
    List<Course> findCourseByidClasse(Long idClass);*/
}
