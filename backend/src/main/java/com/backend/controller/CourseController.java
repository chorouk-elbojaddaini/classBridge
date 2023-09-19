package com.backend.controller;

import com.backend.entity.Course;
import com.backend.model.CourseModel;
import com.backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/courses")
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {

    private final CourseService courseService;

    @PostMapping
    public Course addCourse(@RequestBody CourseModel courseModel){
        return courseService.addCourse(courseModel);
    }
}
