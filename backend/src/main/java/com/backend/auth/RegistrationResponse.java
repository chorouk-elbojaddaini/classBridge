package com.backend.auth;

import com.backend.entity.User;

public class RegistrationResponse {
    private String jwtToken;
    private User user;

    public RegistrationResponse(String jwtToken, User user) {
        this.jwtToken = jwtToken;
        this.user = user;
    }

    public String getJwtToken() {
        return jwtToken;
    }

    public User getUser() {
        return user;
    }
}

