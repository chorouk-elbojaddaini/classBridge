package com.backend.controller;
import com.backend.entity.User;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.model.UserModel;
import com.backend.service.UserServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class UserController {


    private final UserServiceImpl service;
    @Autowired
    private ApplicationEventPublisher publisher;
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

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel, final HttpServletRequest request) {
        User user = service.registerUser(userModel);
        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                applicationUrl(request)
        ));
        return "Success";
    }

    private String applicationUrl(HttpServletRequest request) {
        return "http://" +
                request.getServerName() +
                ":" +
                request.getServerPort() +
                request.getContextPath();
    }

}
