package com.backend.service;


import com.backend.entity.StudentData;
import com.backend.model.StudentModel;

public interface StudentService {
    StudentData addInfo(StudentModel studentData);
}
