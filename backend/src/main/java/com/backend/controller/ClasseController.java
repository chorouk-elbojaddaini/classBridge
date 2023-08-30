package com.backend.controller;


import com.backend.entity.Classe;
import com.backend.model.ClasseModel;
import com.backend.service.ClasseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Slf4j
@RestController
@RequestMapping("/classe")
public class ClasseController {

    @Autowired
    private ClasseService classeService;

    @PostMapping("/add")
    public Classe addClasse(@RequestBody ClasseModel classe) {
        return classeService.addClasse(classe);
    }

    @GetMapping("/{userId}")
    public List<Classe> getAllClasses(@PathVariable Long userId) {
        log.info("le tyyyyyyyype dyalha "+classeService.getClassesByUser(userId));
        return classeService.getClassesByUser(userId);
    }
}
