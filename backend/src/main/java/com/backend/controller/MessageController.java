package com.backend.controller;


import com.backend.entity.Message;
import com.backend.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/message")
@CrossOrigin(origins = "http://localhost:4200")
public class MessageController {

     @Autowired
     private MessageService messageService;
    @PostMapping("/add")
    public Message ajouterMessageAConversation(@RequestBody Message message) {

        Message nouveauMessage = messageService.ajouterMessageAConversation(message);

        return nouveauMessage;
    }
}
