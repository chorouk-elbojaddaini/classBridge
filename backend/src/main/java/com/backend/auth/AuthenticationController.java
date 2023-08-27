package com.backend.auth;

import com.backend.entity.User;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    @Autowired
    private UserService userService;



    /*@PostMapping("/registerteacher")
    public ResponseEntity<AuthenticationResponse> registerTeacher(
            @RequestBody User user, HttpServletRequest servletRequest
    ) {
        AuthenticationResponse response = service.registerTeacher(user);


        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                applicationUrl(servletRequest)
        ));

        return ResponseEntity.ok(response);
    }
    private String applicationUrl(HttpServletRequest servletRequest) {
        return "http://" +
                servletRequest.getServletPath() +
                ":" +
                servletRequest.getServerPort() +
                servletRequest.getContextPath();
    }

    @PostMapping("/registerStudent")
    public String registerStudent(
            @RequestBody User request,HttpServletRequest servletRequest
    ) {
        AuthenticationResponse response = service.registerTeacher(request);
        publisher.publishEvent(new RegistrationCompleteEvent(
                request,
                applicationUrl(servletRequest)
        ));
        return "ok";
    }*/




/*
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }*/

}