package com.backend.service;

import com.backend.entity.Course;
import com.backend.model.CourseModel;

import java.util.List;

public interface CourseService {

    Course addCourse(CourseModel courseModel);
    List<Course> findAll(Long idClass);

}
