package com.backend.repository;

import com.backend.entity.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EtudiantRepository extends JpaRepository<Etudiant,Long> {

    List<Etudiant> findByClassCode(String classCode);

    @Query(value = "SELECT classCode FROM Etudiant e WHERE e.user.id = :id")
    List<String> findByStudentId(Long id);
}
