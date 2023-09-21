package com.backend.controller;


import com.backend.entity.Etudiant;
import com.backend.service.EtudiantService;
import com.backend.serviceImpl.EtudiantServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public List<Etudiant> getByClassCode(@RequestParam String classCode){
        return etudiantService.getByClassCode(classCode);
    }
    @PostMapping("/add")
    public Etudiant addEtudiantData(@RequestBody Etudiant etudiant){
         return etudiantService.addInfo(etudiant);
    }
}
