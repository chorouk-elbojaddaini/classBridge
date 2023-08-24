package com.backend.auth;

import com.backend.config.JwtService;
import com.backend.exception.UserAlreadyExistsException;
import com.backend.model.Role;
import com.backend.model.User;
import com.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse registerTeacher(RegisterRequest request) {
        Optional<User> user = repository.findByEmail(request.getEmail());
        if(user.isPresent()){
            throw new UserAlreadyExistsException(
                    "User with email "+request.getEmail() + " already exists"
            );
        }
        var newUser = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.TEACHER)
                .build();
        repository.save(newUser);
        var jwtToken = jwtService.generateToken(newUser);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    public AuthenticationResponse registerStudent(RegisterRequest request) {
        Optional<User> user = repository.findByEmail(request.getEmail());
        if(user.isPresent()){
            throw new UserAlreadyExistsException(
                    "User with email "+request.getEmail() + " already exists"
            );
        }
        var newUser = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.STUDENT)
                .build();
        repository.save(newUser);
        var jwtToken = jwtService.generateToken(newUser);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
