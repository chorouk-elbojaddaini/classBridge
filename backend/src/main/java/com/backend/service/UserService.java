package com.backend.service;

import com.backend.entity.User;
import com.backend.model.UserModel;

import java.util.Optional;


public interface UserService {
    Optional<User> findById(Long id);
    User updateUser(User user);

    User save(User user);

    void saveVerificationTokenForUser(String token, User user);

    User registerUser(UserModel userModel);
}
