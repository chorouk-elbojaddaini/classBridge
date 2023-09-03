package com.backend.controller;

import com.backend.entity.StudentData;
import com.backend.model.StudentModel;
import com.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("student")
public class StudentController {

    private final StudentService service;

    @PostMapping("/add")
    public StudentData addStudentInfo(@RequestBody StudentModel studentData){
       return service.addInfo(studentData);
    }

    @PutMapping("/{studentId}")
    public String updateStudentNote(
            @PathVariable Long studentId,
            @RequestParam Integer note
    ) {
        StudentData updatedStudentData = service.updateStudentNote(studentId, note);
        return "updated";
    }
}
