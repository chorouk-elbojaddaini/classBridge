package com.backend.auth;
import com.backend.config.JwtService;
import com.backend.entity.VerificationToken;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.exception.UserAlreadyExistsException;
import com.backend.entity.Role;
import com.backend.entity.User;
import com.backend.repository.UserRepository;
import com.backend.repository.VerificationUserTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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
    @Autowired
    private VerificationUserTokenRepository verificationUserTokenRepository;

    public AuthenticationResponse registerTeacher(User userRegistered) {
        Optional<User> user = repository.findByEmail(userRegistered.getEmail());
        if(user.isPresent()){
            throw new UserAlreadyExistsException(
                    "User with email "+userRegistered.getEmail() + " already exists"
            );
        }
        var newUser = User.builder()
                .firstName(userRegistered.getFirstName())
                .lastName(userRegistered.getLastName())
                .email(userRegistered.getEmail())
                .password(passwordEncoder.encode(userRegistered.getPassword()))
                .role(Role.TEACHER)
                .build();
        repository.save(newUser);
        var jwtToken = jwtService.generateToken(newUser);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();

    }
    public void saveVerificationTokenForUser(String token, User user) {
        VerificationToken verificationToken = new VerificationToken(user,token);
        verificationUserTokenRepository.save(verificationToken);

    }



    public User registerUser(User user){
        User userRegistered = User.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .role(Role.TEACHER)
                .build();
        repository.save(userRegistered);
        return user;
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
    public AuthenticationResponse registerStudent(User request) {
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
