package com.backend.serviceImpl;

import com.backend.entity.Classe;
import com.backend.entity.Etudiant;
import com.backend.entity.User;
import com.backend.repository.ClasseRepository;
import com.backend.repository.EtudiantRepository;
import com.backend.repository.UserRepository;
import com.backend.service.EtudiantService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EtudiantServiceImpl implements EtudiantService {
    @Autowired
    private EtudiantRepository etudiantRepository;
    @Autowired
    private ClasseRepository classeRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<Etudiant> getAll() {
        return etudiantRepository.findAll();
    }

    @Override
    public List<Etudiant> getByClassCode(String classCode) {
        return etudiantRepository.findByClassCode(classCode);
    }


    @Override
    public Etudiant addInfo(Etudiant student) {
        Classe classe = classeRepository.findByclassCode(student.getClassCode());
        User user = userRepository.findById(student.getUser().getId()).orElseThrow();
        student.setUser(user);
        Etudiant newStudentData = Etudiant.builder()
                .classCode(classe.getClassCode())
                .user(user)
                .build();
        etudiantRepository.save(newStudentData);
        return newStudentData;
    }

    @Override
    public void deleteStudent(Long id) {
        Optional<Etudiant> etudiantOptional = etudiantRepository.findById(id);

        if (etudiantOptional.isPresent()) {
            etudiantRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("L'étudiant avec l'ID " + id + " n'a pas été trouvé.");
        }
    }

    @Override
    public Etudiant updateNote(Long id, Integer note) {
       Etudiant etudiant = etudiantRepository.findById(id).orElseThrow();
       if(etudiant != null){
           etudiant.setNote(note);
           return etudiantRepository.save(etudiant);
       }
        return null;
    }
}
