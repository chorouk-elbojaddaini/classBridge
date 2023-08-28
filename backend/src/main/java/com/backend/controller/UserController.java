package com.backend.controller;
import com.backend.entity.User;
import com.backend.entity.VerificationToken;
import com.backend.event.RegistrationCompleteEvent;
import com.backend.model.UserModel;
import com.backend.service.UserServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@Slf4j
public class UserController {


    private final UserServiceImpl service;
    @Autowired
    private ApplicationEventPublisher publisher;
    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long id){
        return service.findById(id);
    }

    @PutMapping("/update/{id}")
    public User updateUser(@RequestBody User user,@PathVariable("id") Long id){
        User userToUpdate = service.findById(id).get();
        if(user.getFirstName() != null){
            userToUpdate.setFirstName(user.getFirstName());
        }
        if(user.getLastName() != null){
            userToUpdate.setLastName(user.getLastName());
        }
        if(user.getEmail() != null){
            userToUpdate.setEmail(user.getEmail());
        }
        if(user.getPassword() != null){
            userToUpdate.setPassword(user.getPassword());
        }
        return service.updateUser(userToUpdate);
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody UserModel userModel, final HttpServletRequest request) {
        User user = service.registerUser(userModel);
        publisher.publishEvent(new RegistrationCompleteEvent(
                user,
                applicationUrl(request)
        ));
        return "Success! Please check your email to complete your registration";
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
