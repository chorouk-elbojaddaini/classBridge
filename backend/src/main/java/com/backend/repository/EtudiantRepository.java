package com.backend.repository;

import com.backend.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {

    List<Etudiant> findByClassCode(String classCode);
}
