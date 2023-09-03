package com.backend.serviceImpl;

import com.backend.entity.Classe;
import com.backend.entity.StudentData;
import com.backend.entity.User;
import com.backend.exception.ClasseNotFoundException;
import com.backend.model.StudentModel;
import com.backend.repository.ClasseRepository;
import com.backend.repository.StudentRepository;
import com.backend.repository.UserRepository;
import com.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ClasseRepository classeRepository;
    @Autowired
    private UserRepository userRepository;
    @Override
    public StudentData addInfo(StudentModel student) {
       Classe classe = classeRepository.findByclassCode(student.getCodeJoinClass());
        User user = userRepository.findById(student.getUser().getId()).orElseThrow();
        student.setUser(user);
        StudentData newStudentData = StudentData.builder()
                .codeJoinClass(classe.getClassCode())
                .user(user)
                .build();
        studentRepository.save(newStudentData);
        return newStudentData;
    }
}
