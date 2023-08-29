package com.backend.controller;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.model.UserModel;
import com.backend.service.UserServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {


    private final UserServiceImpl service;

    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long id){
        return service.findById(id);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@RequestBody User user,@PathVariable("id") Long id){
        User userToUpdate = service.findById(id).get();
        if(user.getFirstName() != null){
            userToUpdate.setFirstName(user.getFirstName());
        }
        if(user.getLastName() != null){
            userToUpdate.setLastName(user.getLastName());
        }
        if(user.getEmail() != null){
            userToUpdate.setEmail(user.getEmail());
        }
        if(user.getPassword() != null){
            userToUpdate.setPassword(user.getPassword());
        }
        return service.updateUser(userToUpdate);
    }


}
