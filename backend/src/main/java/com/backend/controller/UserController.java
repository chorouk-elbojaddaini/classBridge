package com.backend.controller;
import com.backend.dto.UserDTO;
import com.backend.entity.User;
import com.backend.model.UserModel;
import com.backend.serviceImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {


    private final UserServiceImpl service;

    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long id){
        return service.findById(id);
    }
    @GetMapping("/email/{email}")
    public UserDTO findUserByEmail(@PathVariable("email") String email){

        return service.getUserInfoByEmail(email);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@RequestBody UserModel user, @PathVariable("id") Long id) {
       return service.updateUser(user,id);
    }





}
