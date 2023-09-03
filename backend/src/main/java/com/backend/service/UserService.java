package com.backend.service;

import com.backend.auth.AuthenticationRequest;
import com.backend.auth.AuthenticationResponse;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.model.UserModel;

import java.util.Map;
import java.util.Optional;


public interface UserService {
    Optional<User> findById(Long id);
    User updateUser(User user);

    User save(User user);

    void saveVerificationTokenForUser(String token, User user);

    User registerUser(UserModel userModel);
    Map<String, Object> registerStudent(UserModel userModel);
    String validateVerificationToken(String token);

    VerificationToken generateNewVerificationToken(String oldToken);
    AuthenticationResponse authenticate(AuthenticationRequest request);
}
