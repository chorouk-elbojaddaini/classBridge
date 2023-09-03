package com.backend.controller;


import com.backend.auth.AuthenticationRequest;
import com.backend.auth.AuthenticationResponse;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.model.UserModel;
import com.backend.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {

    @Autowired
    private UserService service;

    @Autowired
    private ApplicationEventPublisher publisher;

    


    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel, final HttpServletRequest request) {
        User user = service.registerUser(userModel);
        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                applicationUrl(request)
        ));
        return "Success! Please check your email to complete your registration";
    }
    @PostMapping("/registerStudent")
    public  Map<String, Object> registerStudent(@RequestBody UserModel userModel, final HttpServletRequest request) {
        Map<String, Object> registrationResult = service.registerStudent(userModel);
        User user = (User) registrationResult.get("user");
        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                applicationUrl(request)
        ));

        return registrationResult;
    }


    @GetMapping("/verifyRegistration")
    public String verifyEmail(@RequestParam("token") String token){
        String result = service.validateVerificationToken(token);
        if(result.equalsIgnoreCase("valid")){
            return "user verifies successfully!";
        }

        return "Bad User";
    }


    @GetMapping("/resendVerifyToken")
    public String resendVerificationToken(@RequestParam("token") String oldToken,HttpServletRequest request){
        VerificationToken verificationToken = service.generateNewVerificationToken(oldToken);
        User user = verificationToken.getUser();
        resendVerificationTokenMail(user,applicationUrl(request),verificationToken);
        return "Verification Link Sent";
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    private void resendVerificationTokenMail(User user, String applicationUrl,VerificationToken verificationToken) {
        String url =
                applicationUrl
                        + "/auth/verifyRegistration?token="
                        + verificationToken;
        log.info("Click the link to verify your account: {}",
                url);
    }

    private String applicationUrl(HttpServletRequest request) {
        return "http://" +
                request.getServerName() +
                ":" +
                request.getServerPort() +
                request.getContextPath();
    }
}
