package com.backend.service;

import com.backend.entity.Course;
import com.backend.model.CourseModel;

public interface CourseService {

    Course addCourse(CourseModel courseModel);
}
