package com.backend.repository;

import com.backend.entity.Classe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

@Repository
public interface ClasseRepository extends JpaRepository<Classe, Long> {
   public Optional<Classe> findById(Long id);
   @Query("SELECT c FROM Classe c WHERE c.teacher.id = :teacherId")
   List<Classe> findAll(Long teacherId);
   Classe save(Classe newClasse);
}
