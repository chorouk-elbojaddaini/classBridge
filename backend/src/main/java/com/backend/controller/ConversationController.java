package com.backend.controller;


import com.backend.entity.Conversation;
import com.backend.entity.Message;
import com.backend.model.ConversationModel;
import com.backend.service.ConversationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/conversation")
@CrossOrigin(origins = "http://localhost:4200")
public class ConversationController {

    @Autowired
    private ConversationService conversationService;

    @PostMapping("/add")
    public Conversation createConversation(@RequestBody ConversationModel conversationModel){
        return conversationService.createConversation(conversationModel);
    }

    @GetMapping("/{conversationId}/messages")
    public ResponseEntity<List<Message>> getAllMessagesInConversation(
            @PathVariable Long conversationId) {
        List<Message> messages = conversationService.getAllMessagesInConversation(conversationId);

        return ResponseEntity.ok(messages);
    }



}
