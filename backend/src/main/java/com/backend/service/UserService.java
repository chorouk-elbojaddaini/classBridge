package com.backend.service;

import com.backend.auth.AuthenticationRequest;
import com.backend.auth.AuthenticationResponse;
import com.backend.auth.RegistrationResponse;
import com.backend.dto.UserDTO;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.model.UserModel;

import java.util.Map;
import java.util.Optional;


public interface UserService {
    Optional<User> findById(Long id);
    UserDTO getUserInfoByEmail(String email);
    User updateUser(UserModel user,Long id);

    User save(User user);

    void saveVerificationTokenForUser(String token, User user);

    RegistrationResponse registerTeacher(UserModel userModel);
    RegistrationResponse registerStudent(UserModel userModel);
    String validateVerificationToken(String token);

    VerificationToken generateNewVerificationToken(String oldToken);
    AuthenticationResponse authenticate(AuthenticationRequest request);
    UserDTO getUserById(Long id);
}
