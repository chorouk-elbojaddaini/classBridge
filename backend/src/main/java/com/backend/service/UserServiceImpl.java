package com.backend.service;

import com.backend.config.JwtService;
import com.backend.entity.Role;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.model.UserModel;
import com.backend.repository.UserRepository;
import com.backend.repository.VerificationUserTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Autowired
    private VerificationUserTokenRepository verificationUserTokenRepository;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private VerificationUserTokenRepository verificationTokenRepository;
    @Override
    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public void saveVerificationTokenForUser(String token, User user) {
        VerificationToken verificationToken
                = new VerificationToken(user, token);

        verificationTokenRepository.save(verificationToken);
    }

    @Override
    public User registerUser(UserModel usermodel) {
        User user = User.builder()
                .firstName(usermodel.getFirstName())
                .lastName(usermodel.getLastName())
                .email(usermodel.getEmail())
                .password(passwordEncoder.encode(usermodel.getPassword()))
                .role(Role.TEACHER)
                .build();
        repository.save(user);
        return user;
    }


}
