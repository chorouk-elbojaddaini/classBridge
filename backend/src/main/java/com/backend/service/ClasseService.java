package com.backend.service;

import com.backend.entity.Classe;
import com.backend.entity.User;
import com.backend.model.ClasseModel;
import com.backend.repository.ClasseRepository;
import com.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

public interface ClasseService {
    public Classe addClasse(ClasseModel classe);
    public List<Classe> getClassesByUser(Long userId);
    public Classe findByClassCode(String classCode);



    }
