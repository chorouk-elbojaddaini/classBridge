package com.backend.controller;

import com.backend.entity.StudentData;
import com.backend.model.StudentModel;
import com.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("student")
public class StudentController {

    private final StudentService service;

    @PostMapping("/add")
    public StudentData addStudentInfo(@RequestBody StudentModel studentData){
       return service.addInfo(studentData);
    }
}
