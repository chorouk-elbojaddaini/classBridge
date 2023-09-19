package com.backend.serviceImpl;

import com.backend.entity.Classe;
import com.backend.entity.Course;
import com.backend.entity.StudentData;
import com.backend.model.CourseModel;
import com.backend.repository.ClasseRepository;
import com.backend.repository.CourseRepository;
import com.backend.repository.UserRepository;
import com.backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private ClasseRepository classeRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Override
    public Course addCourse(CourseModel courseModel) {
        Classe classe = classeRepository.findById(courseModel.getClasse().getIdClass()).orElseThrow();

        courseModel.setClasse(classe);

        Course course = Course.builder()
                .courseName(courseModel.getCourseName())
                .description(courseModel.getDescription())
                .filePath(courseModel.getFilePath())
                .date(new Date())
                .classe(classe)
                .build();
        courseRepository.save(course);
        return course;
    }
}
