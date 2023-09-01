package com.backend.serviceImpl;

import com.backend.entity.Classe;
import com.backend.entity.StudentData;
import com.backend.entity.User;
import com.backend.model.StudentModel;
import com.backend.repository.ClasseRepository;
import com.backend.repository.StudentRepository;
import com.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private ClasseRepository classeRepository;
    @Override
    public StudentData addInfo(StudentModel student) {
       Classe classe = classeRepository.findByclassCode(student.getCodeJoinClass());
        return studentRepository.save(student);
    }
}
