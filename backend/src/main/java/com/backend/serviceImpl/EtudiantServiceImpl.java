package com.backend.serviceImpl;

import com.backend.entity.Etudiant;
import com.backend.repository.EtudiantRepository;
import com.backend.service.EtudiantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EtudiantServiceImpl implements EtudiantService {
    @Autowired
    private EtudiantRepository etudiantRepository;
    @Override
    public List<Etudiant> getAll() {
        return etudiantRepository.findAll();
    }
}
