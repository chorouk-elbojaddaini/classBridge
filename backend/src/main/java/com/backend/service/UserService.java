package com.backend.service;

import com.backend.model.User;

import java.util.Optional;


public interface UserService {
    Optional<User> findById(Long id);
    User updateUser(User user);

    User save(User user);
}
