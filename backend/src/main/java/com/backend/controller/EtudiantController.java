package com.backend.controller;


import com.backend.entity.Etudiant;
import com.backend.service.EtudiantService;
import com.backend.serviceImpl.EtudiantServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/etudiants")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class EtudiantController {


    private final EtudiantServiceImpl etudiantService;

    @GetMapping("/get")
    public List<Etudiant> gettAll(){
        return etudiantService.getAll();
    }
}
