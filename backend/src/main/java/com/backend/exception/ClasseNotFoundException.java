package com.backend.exception;

public class ClasseNotFoundException extends RuntimeException{
    public ClasseNotFoundException(String message) {
        super(message);
    }
}
