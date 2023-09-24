package com.backend.service;

import com.backend.entity.Etudiant;

import java.util.List;

public interface EtudiantService {

    List<Etudiant> getAll();

    List<Etudiant> getByClassCode(String classCode);

    Etudiant addInfo(Etudiant student);

    void deleteStudent(Long id);

    Etudiant updateNote(Long id, Integer note);

    List<String> getAllClassCode(Long id);
}
