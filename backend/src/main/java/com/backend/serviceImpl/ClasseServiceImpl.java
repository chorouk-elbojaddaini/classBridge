package com.backend.serviceImpl;

import com.backend.entity.Classe;
import com.backend.entity.User;
import com.backend.model.ClasseModel;
import com.backend.repository.ClasseRepository;
import com.backend.repository.UserRepository;
import com.backend.service.ClasseService;
import com.backend.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ClasseServiceImpl implements ClasseService {

    @Autowired
    private ClasseRepository classeRepository;

    @Autowired
    private UserRepository userRepository;


    @Override
    public Classe addClasse(ClasseModel classe){
        User user = userRepository.findById(classe.getTeacher().getId()).orElseThrow();
        classe.setTeacher(user);
        int desiredLength = 8;
        String randomString = generateRandomString(desiredLength);
        classe.setClassCode(randomString);
        Classe newClasse= Classe.builder()
                .fieldName(classe.getFieldName())
                .module(classe.getModule())
                .level(classe.getLevel())
                .classCode(classe.getClassCode())
                .teacher(user)
                .build();
        classeRepository.save(newClasse);
        return newClasse;
    }


    @Override
    public List<Classe> getClassesByUser(Long userId) {
        List<Classe> classes = classeRepository.findAll(userId);
        return classes;
    }




    public static String generateRandomString(int length) {
        String characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder();

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            stringBuilder.append(randomChar);
        }

        return stringBuilder.toString();
    }
}
